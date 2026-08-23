using Microsoft.EntityFrameworkCore;
using ParkingSystem.Api.Data;

namespace ParkingSystem.Api.Services
{
    public class ParkingCalculationService : IParkingCalculationService
    {
        private readonly ParkingDbContext _context;

        public ParkingCalculationService(ParkingDbContext context)
        {
            _context = context;
        }

        public async Task<decimal> CalculateParkingFee(
            int vehicleId,
            decimal durationHours)
        {
            if (durationHours < 0)
            {
                throw new InvalidOperationException(
                    "Parking duration cannot be negative.");
            }

            var vehicle = await _context.Vehicles
                .FirstOrDefaultAsync(v => v.Id == vehicleId);

            if (vehicle == null)
            {
                throw new InvalidOperationException("Vehicle does not exist.");
            }

            var rate = await _context.ParkingRates
                .FirstOrDefaultAsync(r => r.VehicleType == vehicle.VehicleType);

            if (rate == null)
            {
                throw new InvalidOperationException(
                    $"No parking rate found for vehicle type '{vehicle.VehicleType}'.");
            }

            if (durationHours <= rate.FixedHours)
            {
                return rate.FixedRate;
            }

            var exceedingHours = Math.Ceiling(
                durationHours - rate.FixedHours);

            return rate.FixedRate +
                   (exceedingHours * rate.ExceedingRate);
        }
    } 
}