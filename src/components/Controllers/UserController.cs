using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuickBasket.web.Data;
using QuickBasket.web.Models;

namespace QuickBasket.web.Controllers
{
    [Authorize]
    public class UserController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<IdentityUser> _userManager;

        public UserController(ApplicationDbContext context, UserManager<IdentityUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task<IActionResult> Profile()
        {
            var user = await _userManager.GetUserAsync(User);
            return View(user);
        }

        public async Task<IActionResult> Orders()
        {
            var userId = _userManager.GetUserId(User);
            var orders = await _context.Orders
                .Include(o => o.OrderItems)
                .ThenInclude(oi => oi.Product)
                .Where(o => o.UserId == userId)
                .OrderByDescending(o => o.OrderDate)
                .ToListAsync();

            return View(orders);
        }

        // --- WISHLIST LOGIC ---

        public async Task<IActionResult> Wishlist()
        {
            var userId = _userManager.GetUserId(User);
            var items = await _context.WishlistItems
                .Include(w => w.Product)
                .Where(w => w.UserId == userId)
                .ToListAsync();

            return View(items);
        }

        [HttpPost]
        public async Task<IActionResult> AddToWishlist(int productId)
        {
            var userId = _userManager.GetUserId(User);

            // Prevent duplicates
            if (!_context.WishlistItems.Any(w => w.UserId == userId && w.ProductId == productId))
            {
                _context.WishlistItems.Add(new WishlistItem { UserId = userId, ProductId = productId });
                await _context.SaveChangesAsync();
            }
            return RedirectToAction(nameof(Wishlist));
        }

        [HttpPost]
        public async Task<IActionResult> RemoveFromWishlist(int wishlistItemId)
        {
            var item = await _context.WishlistItems.FindAsync(wishlistItemId);
            if (item != null)
            {
                _context.WishlistItems.Remove(item);
                await _context.SaveChangesAsync();
            }
            return RedirectToAction(nameof(Wishlist));
        }
    }
}