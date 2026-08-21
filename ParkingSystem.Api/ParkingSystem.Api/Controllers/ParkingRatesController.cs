using Microsoft.AspNetCore.Mvc;

namespace ParkingSystem.Api.Controllers
{
    public class ParkingRatesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
