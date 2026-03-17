using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using QuickBasket.web.Data;
using QuickBasket.web.Models;

namespace QuickBasket.web.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AdminController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<IdentityUser> _userManager;

        public AdminController(ApplicationDbContext context, UserManager<IdentityUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public IActionResult Dashboard()
        {
            ViewBag.TotalRevenue = _context.Orders.Sum(o => o.TotalAmount);
            ViewBag.TotalOrders = _context.Orders.Count();
            ViewBag.NewCustomers = _context.Users.Count();
            ViewBag.PendingDeliveries = _context.Orders.Count(o => o.OrderStatus == "Pending");

            return View();
        }

        public IActionResult OrderManagement()
        {
            var orders = _context.Orders
                .Include(o => o.OrderItems)
                .OrderByDescending(o => o.OrderDate)
                .ToList();

            return View(orders);
        }

        public IActionResult OrderDetails(int id)
        {
            var order = _context.Orders
                .Include(o => o.OrderItems)
                .ThenInclude(oi => oi.Product)
                .FirstOrDefault(o => o.OrderId == id);

            if (order == null)
            {
                return NotFound();
            }

            return View(order);
        }

        [HttpPost]
        public IActionResult UpdateOrderStatus(int orderId, string status)
        {
            var order = _context.Orders.Find(orderId);
            if (order != null)
            {
                order.OrderStatus = status;
                _context.SaveChanges();
            }
            return RedirectToAction(nameof(OrderDetails), new { id = orderId });
        }

        public IActionResult Products()
        {
            var products = _context.Products
                .Include(p => p.Category)
                .ToList();

            return View(products);
        }

        public IActionResult AddProduct()
        {
            ViewBag.Categories = new SelectList(_context.Categories, "CategoryId", "Name");
            return View("AddEditProduct", new Product());
        }

        public IActionResult EditProduct(int id)
        {
            var product = _context.Products.Find(id);
            if (product == null) return NotFound();

            ViewBag.Categories = new SelectList(_context.Categories, "CategoryId", "Name");
            return View("AddEditProduct", product);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult UpsertProduct(Product product)
        {
            if (ModelState.IsValid)
            {
                if (product.ProductId == 0) _context.Products.Add(product);
                else _context.Update(product);

                _context.SaveChanges();
                return RedirectToAction(nameof(Products));
            }
            ViewBag.Categories = new SelectList(_context.Categories, "CategoryId", "Name");
            return View("AddEditProduct", product);
        }

        [HttpPost]
        public IActionResult DeleteProduct(int id)
        {
            var product = _context.Products.Find(id);
            if (product != null)
            {
                _context.Products.Remove(product);
                _context.SaveChanges();
            }
            return RedirectToAction(nameof(Products));
        }

        public IActionResult Users()
        {
            var users = _context.Users.ToList();
            return View(users);
        }

        [HttpPost]
        public async Task<IActionResult> ToggleUserStatus(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null) return NotFound();

            if (await _userManager.IsLockedOutAsync(user))
            {
                await _userManager.SetLockoutEndDateAsync(user, null); // Unlock
            }
            else
            {
                await _userManager.SetLockoutEndDateAsync(user, DateTimeOffset.MaxValue); // Block
            }

            return RedirectToAction(nameof(Users));
        }

        // --- SETTINGS LOGIC ---

        public async Task<IActionResult> Settings()
        {
            var config = await _context.StoreConfigurations.FirstOrDefaultAsync();

            if (config == null)
            {
                config = new StoreConfiguration();
            }

            return View(config);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> UpdateSettings(StoreConfiguration config)
        {
            if (ModelState.IsValid)
            {
                var existingConfig = await _context.StoreConfigurations.FirstOrDefaultAsync();

                if (existingConfig == null)
                {
                    _context.StoreConfigurations.Add(config);
                }
                else
                {
                    existingConfig.StoreName = config.StoreName;
                    existingConfig.SupportEmail = config.SupportEmail;
                    existingConfig.SupportPhone = config.SupportPhone;
                    existingConfig.GstPercentage = config.GstPercentage;
                    existingConfig.ServiceCharge = config.ServiceCharge;
                    existingConfig.FreeDeliveryThreshold = config.FreeDeliveryThreshold;
                    existingConfig.AllowCod = config.AllowCod;

                    _context.Update(existingConfig);
                }

                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Settings));
            }

            return View("Settings", config);
        }

        // --- NEW: CONTACT MESSAGES LOGIC ---

        public async Task<IActionResult> ContactMessages()
        {
            var messages = await _context.ContactMessages
                .OrderByDescending(m => m.CreatedAt)
                .ToListAsync();

            return View(messages);
        }

        [HttpPost]
        public async Task<IActionResult> MarkMessageAsRead(int id)
        {
            var message = await _context.ContactMessages.FindAsync(id);
            if (message != null)
            {
                message.IsRead = true;
                await _context.SaveChangesAsync();
            }
            return RedirectToAction(nameof(ContactMessages));
        }
    }
}