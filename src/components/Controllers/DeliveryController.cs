using Microsoft.AspNetCore.Mvc;

namespace QuickBasket.web.Controllers
{
    public class DeliveryController : Controller
    {
        // This action will serve the delivery driver's main view
        // showing their assigned deliveries.
        public IActionResult Index()
        {
            return View();
        }
    }
}