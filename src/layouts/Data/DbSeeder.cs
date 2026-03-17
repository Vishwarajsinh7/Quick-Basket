using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using QuickBasket.web.Models;

namespace QuickBasket.web.Data
{
    public static class DbSeeder
    {
        public static async Task SeedData(ApplicationDbContext context, UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            // 1. Apply any pending migrations automatically
            context.Database.Migrate();

            // 2. CREATE ROLES if they don't exist
            string[] roleNames = { "Admin", "Customer", "Delivery" };
            foreach (var roleName in roleNames)
            {
                if (!await roleManager.RoleExistsAsync(roleName))
                {
                    await roleManager.CreateAsync(new IdentityRole(roleName));
                }
            }

            // 3. CREATE DEFAULT ADMIN USER
            var adminEmail = "admin@quickbasket.com";
            var adminUser = await userManager.FindByEmailAsync(adminEmail);
            if (adminUser == null)
            {
                var user = new IdentityUser
                {
                    UserName = adminEmail,
                    Email = adminEmail,
                    EmailConfirmed = true,
                    PhoneNumber = "9999999999"
                };
                // Default Password: Admin@123
                var result = await userManager.CreateAsync(user, "Admin@123");
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(user, "Admin");
                }
            }

            // 4. SEED CATEGORIES & PRODUCTS (Only if empty)
            if (context.Categories.Any())
            {
                return;
            }

            var categories = new List<Category>
            {
                new Category { Name = "Fresh Produce" },
                new Category { Name = "Bakery & Dairy" },
                new Category { Name = "Pantry Staples" }
            };

            context.Categories.AddRange(categories);
            context.SaveChanges();

            var products = new List<Product>
            {
                new Product
                {
                    Name = "Organic Ooty Carrots",
                    Description = "Locally sourced, pesticide-free crunchy carrots.",
                    Price = 60.00m,
                    StockQuantity = 120,
                    CategoryId = categories.Single(c => c.Name == "Fresh Produce").CategoryId,
                    ImageUrl = "fa-carrot"
                },
                new Product
                {
                    Name = "Kashmiri Apples",
                    Description = "Sweet and crisp apples direct from orchards.",
                    Price = 180.00m,
                    StockQuantity = 50,
                    CategoryId = categories.Single(c => c.Name == "Fresh Produce").CategoryId,
                    ImageUrl = "fa-apple-whole"
                },
                new Product
                {
                    Name = "Multigrain Bread",
                    Description = "Baked fresh this morning with organic flour.",
                    Price = 55.00m,
                    StockQuantity = 20,
                    CategoryId = categories.Single(c => c.Name == "Bakery & Dairy").CategoryId,
                    ImageUrl = "fa-bread-slice"
                },
                new Product
                {
                    Name = "Amul Cheddar Cheese",
                    Description = "Processed cheddar cheese block (200g).",
                    Price = 135.00m,
                    StockQuantity = 8,
                    CategoryId = categories.Single(c => c.Name == "Bakery & Dairy").CategoryId,
                    ImageUrl = "fa-cheese"
                },
                new Product
                {
                    Name = "Brown Eggs (12 pcs)",
                    Description = "Free-range, antibiotic-free eggs.",
                    Price = 110.00m,
                    StockQuantity = 30,
                    CategoryId = categories.Single(c => c.Name == "Bakery & Dairy").CategoryId,
                    ImageUrl = "fa-egg"
                },
                new Product
                {
                    Name = "Extra Virgin Olive Oil",
                    Description = "Premium imported cold-pressed (1L).",
                    Price = 950.00m,
                    StockQuantity = 45,
                    CategoryId = categories.Single(c => c.Name == "Pantry Staples").CategoryId,
                    ImageUrl = "fa-bottle-droplet"
                }
            };

            context.Products.AddRange(products);
            context.SaveChanges();
        }
    }
}