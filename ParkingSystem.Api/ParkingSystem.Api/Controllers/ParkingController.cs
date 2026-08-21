using Microsoft.AspNetCore.Mvc;

namespace ParkingSystem.Api.Controllers
{
    public class ParkingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
