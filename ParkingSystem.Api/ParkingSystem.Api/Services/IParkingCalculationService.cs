namespace ParkingSystem.Api.Services
{
    public interface IParkingCalculationService
    {
        Task<decimal> CalculateParkingFee(
            int vehicleId,
            decimal durationHours);
    }
}
