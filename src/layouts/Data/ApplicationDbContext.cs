using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using QuickBasket.web.Models;

namespace QuickBasket.web.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // --- Register Domain Models as Tables ---
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }

        // Shopping Cart Tables
        public DbSet<Cart> Carts { get; set; }
        public DbSet<CartItem> CartItems { get; set; }

        // Order Processing Tables
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }

        // Wishlist Table
        public DbSet<WishlistItem> WishlistItems { get; set; }

        // Store Configuration (Singleton Table)
        public DbSet<StoreConfiguration> StoreConfigurations { get; set; }

        // NEW: Contact Messages Table
        public DbSet<ContactMessage> ContactMessages { get; set; }
    }
}