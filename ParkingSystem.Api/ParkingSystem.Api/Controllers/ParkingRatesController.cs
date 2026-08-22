using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ParkingSystem.Api.Data;
using ParkingSystem.Api.Models;

namespace ParkingSystem.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ParkingRatesController : ControllerBase
    {
        private readonly ParkingDbContext _context;

        public ParkingRatesController(ParkingDbContext context)
        {
            _context = context;
        }

        // GET: api/ParkingRates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ParkingRate>>> GetParkingRates()
        {
            return await _context.ParkingRates.ToListAsync();
        }

        // GET: api/ParkingRates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ParkingRate>> GetParkingRate(int id)
        {
            var parkingRate = await _context.ParkingRates.FindAsync(id);

            if (parkingRate == null)
            {
                return NotFound();
            }

            return parkingRate;
        }

        // POST: api/ParkingRates
        [HttpPost]
        public async Task<ActionResult<ParkingRate>> CreateParkingRate(
            ParkingRate parkingRate)
        {
            _context.ParkingRates.Add(parkingRate);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetParkingRate),
                new { id = parkingRate.Id },
                parkingRate
            );
        }

        // PUT: api/ParkingRates/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateParkingRate(
            int id,
            ParkingRate parkingRate)
        {
            if (id != parkingRate.Id)
            {
                return BadRequest();
            }

            _context.Entry(parkingRate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _context.ParkingRates.AnyAsync(p => p.Id == id))
                {
                    return NotFound();
                }

                throw;
            }

            return NoContent();
        }

        // DELETE: api/ParkingRates/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteParkingRate(int id)
        {
            var parkingRate = await _context.ParkingRates.FindAsync(id);

            if (parkingRate == null)
            {
                return NotFound();
            }

            _context.ParkingRates.Remove(parkingRate);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}