using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using QuickBasket.web.Data;
using QuickBasket.web.Models;
using QuickBasket.web.Services;
using System.Diagnostics;

namespace QuickBasket.web.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ApplicationDbContext _context;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IRazorpayService _razorpayService;
        private readonly RazorpaySettings _razorpaySettings;
        private readonly ISettingsService _settingsService;

        public HomeController(
            ILogger<HomeController> logger,
            ApplicationDbContext context,
            UserManager<IdentityUser> userManager,
            IRazorpayService razorpayService,
            IOptions<RazorpaySettings> razorpaySettings,
            ISettingsService settingsService)
        {
            _logger = logger;
            _context = context;
            _userManager = userManager;
            _razorpayService = razorpayService;
            _razorpaySettings = razorpaySettings.Value;
            _settingsService = settingsService;
        }

        public IActionResult Index()
        {
            return View();
        }

        // --- PUBLIC PAGES ---

        public IActionResult AboutUs()
        {
            return View();
        }

        [HttpGet]
        public IActionResult ContactUs()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ContactUs(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                // Map ViewModel to the Database Entity
                var message = new ContactMessage
                {
                    Name = model.Name,
                    Email = model.Email,
                    Subject = model.Subject,
                    Message = model.Message,
                    CreatedAt = DateTime.Now,
                    IsRead = false
                };

                _context.ContactMessages.Add(message);
                await _context.SaveChangesAsync();

                TempData["SuccessMessage"] = "Thank you! Your message has been sent successfully.";
                return RedirectToAction(nameof(ContactUs));
            }

            return View(model);
        }

        // --- END PUBLIC PAGES ---

        public IActionResult Catalog(int? categoryId, string searchString, string sortBy, decimal? maxPrice)
        {
            var products = _context.Products.Include(p => p.Category).AsQueryable();

            if (categoryId.HasValue)
            {
                products = products.Where(p => p.CategoryId == categoryId);
            }

            if (!string.IsNullOrEmpty(searchString))
            {
                products = products.Where(p => p.Name.Contains(searchString) || p.Description.Contains(searchString));
            }

            if (maxPrice.HasValue && maxPrice.Value > 0)
            {
                products = products.Where(p => p.Price <= maxPrice.Value);
            }

            switch (sortBy)
            {
                case "price_asc":
                    products = products.OrderBy(p => p.Price);
                    break;
                case "price_desc":
                    products = products.OrderByDescending(p => p.Price);
                    break;
                default:
                    products = products.OrderBy(p => p.ProductId);
                    break;
            }

            ViewData["CurrentCategory"] = categoryId;
            ViewData["CurrentSearch"] = searchString;
            ViewData["CurrentSort"] = sortBy;
            ViewData["MaxPrice"] = maxPrice;

            return View(products.ToList());
        }

        public IActionResult Details(int id)
        {
            var product = _context.Products
                .Include(p => p.Category)
                .FirstOrDefault(p => p.ProductId == id);

            if (product == null)
            {
                return RedirectToAction("PageNotFound");
            }

            return View(product);
        }

        // --- CART LOGIC ---

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> AddToCart(int productId, int quantity)
        {
            var userId = _userManager.GetUserId(User);

            var cart = await _context.Carts
                .Include(c => c.CartItems)
                .FirstOrDefaultAsync(c => c.UserId == userId);

            if (cart == null)
            {
                cart = new Cart { UserId = userId };
                _context.Carts.Add(cart);
            }

            var cartItem = cart.CartItems.FirstOrDefault(ci => ci.ProductId == productId);

            if (cartItem != null)
            {
                cartItem.Quantity += quantity;
            }
            else
            {
                cart.CartItems.Add(new CartItem
                {
                    ProductId = productId,
                    Quantity = quantity
                });
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Cart));
        }

        [Authorize]
        public async Task<IActionResult> Cart()
        {
            var userId = _userManager.GetUserId(User);

            var cart = await _context.Carts
                .Include(c => c.CartItems)
                .ThenInclude(ci => ci.Product)
                .FirstOrDefaultAsync(c => c.UserId == userId);

            if (cart == null)
            {
                cart = new Cart { CartItems = new List<CartItem>() };
            }

            var settings = await _settingsService.GetSettingsAsync();
            ViewBag.GstPercentage = settings.GstPercentage;

            return View(cart);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> UpdateQuantity(int cartItemId, int change)
        {
            var cartItem = await _context.CartItems.FindAsync(cartItemId);

            if (cartItem != null)
            {
                cartItem.Quantity += change;
                if (cartItem.Quantity <= 0)
                {
                    _context.CartItems.Remove(cartItem);
                }
                await _context.SaveChangesAsync();
            }

            return RedirectToAction(nameof(Cart));
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> RemoveFromCart(int cartItemId)
        {
            var cartItem = await _context.CartItems.FindAsync(cartItemId);
            if (cartItem != null)
            {
                _context.CartItems.Remove(cartItem);
                await _context.SaveChangesAsync();
            }
            return RedirectToAction(nameof(Cart));
        }

        // --- CHECKOUT & ORDER LOGIC ---

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> Checkout()
        {
            var userId = _userManager.GetUserId(User);

            var cart = await _context.Carts
                .Include(c => c.CartItems)
                .ThenInclude(ci => ci.Product)
                .FirstOrDefaultAsync(c => c.UserId == userId);

            if (cart == null || !cart.CartItems.Any())
            {
                return RedirectToAction(nameof(Cart));
            }

            ViewBag.Cart = cart;
            ViewBag.RazorpayKey = _razorpaySettings.KeyId;

            var settings = await _settingsService.GetSettingsAsync();
            ViewBag.GstPercentage = settings.GstPercentage;

            return View(new Order());
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> CreateRazorpayOrder()
        {
            var userId = _userManager.GetUserId(User);
            var cart = await _context.Carts
                .Include(c => c.CartItems)
                .ThenInclude(ci => ci.Product)
                .FirstOrDefaultAsync(c => c.UserId == userId);

            if (cart == null) return BadRequest("Cart is empty");

            var settings = await _settingsService.GetSettingsAsync();
            decimal subtotal = cart.CartItems.Sum(i => i.Quantity * i.Product.Price);
            decimal total = subtotal + (subtotal * (settings.GstPercentage / 100));

            string receiptId = "rcpt_" + DateTime.Now.Ticks.ToString();

            try
            {
                string orderId = await _razorpayService.CreateOrder(total, receiptId);
                return Ok(new { orderId = orderId });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [Authorize]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> PlaceOrder(Order order)
        {
            var userId = _userManager.GetUserId(User);

            var cart = await _context.Carts
                .Include(c => c.CartItems)
                .ThenInclude(ci => ci.Product)
                .FirstOrDefaultAsync(c => c.UserId == userId);

            if (cart == null || !cart.CartItems.Any())
            {
                return RedirectToAction(nameof(Catalog));
            }

            order.UserId = userId;
            order.OrderDate = DateTime.Now;
            order.OrderStatus = "Pending";

            var settings = await _settingsService.GetSettingsAsync();
            decimal subtotal = cart.CartItems.Sum(i => i.Quantity * i.Product.Price);
            decimal tax = subtotal * (settings.GstPercentage / 100);
            order.TotalAmount = subtotal + tax;

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            foreach (var item in cart.CartItems)
            {
                var orderItem = new OrderItem
                {
                    OrderId = order.OrderId,
                    ProductId = item.ProductId,
                    Quantity = item.Quantity,
                    Price = item.Product.Price
                };
                _context.OrderItems.Add(orderItem);
            }

            _context.CartItems.RemoveRange(cart.CartItems);
            await _context.SaveChangesAsync();

            return RedirectToAction(nameof(OrderConfirmation), new { id = order.OrderId });
        }

        [Authorize]
        public async Task<IActionResult> OrderConfirmation(int id)
        {
            var userId = _userManager.GetUserId(User);

            var order = await _context.Orders
                .Include(o => o.OrderItems)
                .ThenInclude(oi => oi.Product)
                .FirstOrDefaultAsync(o => o.OrderId == id && o.UserId == userId);

            if (order == null)
            {
                return RedirectToAction("PageNotFound");
            }

            return View(order);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult PageNotFound()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}