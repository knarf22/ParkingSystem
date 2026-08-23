using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ParkingSystem.Api.Data;
using ParkingSystem.Api.DTOs;
using ParkingSystem.Api.Models;
using ParkingSystem.Api.Services;

namespace ParkingSystem.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ParkingController : ControllerBase
    {
        private readonly ParkingDbContext _context;
        private readonly IParkingCalculationService _calculationService;

        public ParkingController(
            ParkingDbContext context,
            IParkingCalculationService calculationService)
        {
            _context = context;
            _calculationService = calculationService;
        }

        // GET: api/Parking
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ParkingTransactionDto>>> GetParkingTransactions()
        {
            return await _context.ParkingTransactions
                .Select(t => new ParkingTransactionDto
                {
                    Id = t.Id,
                    VehicleId = t.VehicleId,
                    PlateNumber = t.Vehicle!.PlateNumber,
                    VehicleType = t.Vehicle!.VehicleType,
                    Owner = t.Vehicle!.Owner,
                    EntryTime = t.EntryTime,
                    ExitTime = t.ExitTime,
                    DurationHours = t.DurationHours,
                    TotalAmount = t.TotalAmount,
                    Status = t.Status
                })
                .ToListAsync();
        }

        // GET: api/Parking/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ParkingTransactionDto>> GetParkingTransaction(int id)
        {
            var transaction = await _context.ParkingTransactions
                .Where(t => t.Id == id)
                .Select(t => new ParkingTransactionDto
                {
                    Id = t.Id,
                    VehicleId = t.VehicleId,
                    PlateNumber = t.Vehicle!.PlateNumber,
                    VehicleType = t.Vehicle!.VehicleType,
                    Owner = t.Vehicle!.Owner,
                    EntryTime = t.EntryTime,
                    ExitTime = t.ExitTime,
                    DurationHours = t.DurationHours,
                    TotalAmount = t.TotalAmount,
                    Status = t.Status
                })
                .FirstOrDefaultAsync();

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

            var alreadyParked = await _context.ParkingTransactions
            .AnyAsync(t =>
                t.VehicleId == transaction.VehicleId &&
                t.Status == "PARKED");

            if (alreadyParked)
            {
                return BadRequest("Vehicle is already parked.");
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

        // PUT: api/Parking/5/exit
        [HttpPut("{id}/exit")]
        public async Task<ActionResult<ParkingTransactionDto>> ExitParking(int id)
        {
            var transaction = await _context.ParkingTransactions
                .Include(t => t.Vehicle)
                .FirstOrDefaultAsync(t => t.Id == id);

            if (transaction == null)
            {
                return NotFound();
            }

            if (transaction.Status == "COMPLETED")
            {
                return BadRequest("Parking transaction is already completed.");
            }

            if (DateTime.Now < transaction.EntryTime)
            {
                return BadRequest("Exit time cannot be earlier than entry time.");
            }

            var exitTime = DateTime.Now;

            var duration = (decimal)(
                exitTime - transaction.EntryTime
            ).TotalHours;

            var totalAmount = await _calculationService.CalculateParkingFee(
                transaction.VehicleId,
                duration);

            transaction.ExitTime = exitTime;
            transaction.DurationHours = Math.Round(duration, 2);
            transaction.TotalAmount = totalAmount;
            transaction.Status = "COMPLETED";

            await _context.SaveChangesAsync();

            var result = new ParkingTransactionDto
            {
                Id = transaction.Id,
                VehicleId = transaction.VehicleId,
                PlateNumber = transaction.Vehicle!.PlateNumber,
                VehicleType = transaction.Vehicle!.VehicleType,
                Owner = transaction.Vehicle!.Owner,
                EntryTime = transaction.EntryTime,
                ExitTime = transaction.ExitTime,
                DurationHours = transaction.DurationHours,
                TotalAmount = transaction.TotalAmount,
                Status = transaction.Status
            };

            return Ok(result);
        }
    }
}