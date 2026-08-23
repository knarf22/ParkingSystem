using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ParkingSystem.Api.Data;
using ParkingSystem.Api.Models;

namespace ParkingSystem.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ParkingController : ControllerBase
    {
        private readonly ParkingDbContext _context;

        public ParkingController(ParkingDbContext context)
        {
            _context = context;
        }

        // GET: api/Parking
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ParkingTransaction>>> GetParkingTransactions()
        {
            return await _context.ParkingTransactions
                .Include(t => t.Vehicle)
                .ToListAsync();
        }

        // GET: api/Parking/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ParkingTransaction>> GetParkingTransaction(int id)
        {
            var transaction = await _context.ParkingTransactions
                .Include(t => t.Vehicle)
                .FirstOrDefaultAsync(t => t.Id == id);

            if (transaction == null)
            {
                return NotFound();
            }

            return transaction;
        }

        // POST: api/Parking
        [HttpPost]
        public async Task<ActionResult<ParkingTransaction>> CreateParkingTransaction(
            ParkingTransaction transaction)
        {
            var vehicleExists = await _context.Vehicles
                .AnyAsync(v => v.Id == transaction.VehicleId);

            if (!vehicleExists)
            {
                return BadRequest("Vehicle does not exist.");
            }

            _context.ParkingTransactions.Add(transaction);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetParkingTransaction),
                new { id = transaction.Id },
                transaction
            );
        }

        // PUT: api/Parking/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateParkingTransaction(
            int id,
            ParkingTransaction transaction)
        {
            if (id != transaction.Id)
            {
                return BadRequest();
            }

            var vehicleExists = await _context.Vehicles
                .AnyAsync(v => v.Id == transaction.VehicleId);

            if (!vehicleExists)
            {
                return BadRequest("Vehicle does not exist.");
            }

            _context.Entry(transaction).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _context.ParkingTransactions
                    .AnyAsync(t => t.Id == id))
                {
                    return NotFound();
                }

                throw;
            }

            return NoContent();
        }

        // DELETE: api/Parking/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteParkingTransaction(int id)
        {
            var transaction = await _context.ParkingTransactions
                .FindAsync(id);

            if (transaction == null)
            {
                return NotFound();
            }

            _context.ParkingTransactions.Remove(transaction);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}