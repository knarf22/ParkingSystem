using Microsoft.AspNetCore.Mvc;

namespace ParkingSystem.Api.Controllers
{
    public class VehiclesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
