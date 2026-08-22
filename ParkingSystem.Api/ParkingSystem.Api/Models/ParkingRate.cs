namespace ParkingSystem.Api.Models
{
    public class ParkingRate
    {
        public int Id { get; set; }

        public string VehicleType { get; set; } = string.Empty;

        public int FixedHours { get; set; }

        public decimal FixedRate { get; set; }

        public decimal ExceedingRate { get; set; }
    }
}
