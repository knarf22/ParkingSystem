namespace ParkingSystem.Api.Models
{
    public class Vehicle
    {
        public int Id { get; set; }

        public string PlateNumber { get; set; } = string.Empty;

        public string VehicleType { get; set; } = string.Empty;

        public string Owner { get; set; } = string.Empty;

        public ICollection<ParkingTransaction> ParkingTransactions { get; set; }
            = new List<ParkingTransaction>();
    }
}
