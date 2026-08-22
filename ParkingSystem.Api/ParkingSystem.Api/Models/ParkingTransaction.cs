namespace ParkingSystem.Api.Models
{
    public class ParkingTransaction
    {
        public int Id { get; set; }

        public int VehicleId { get; set; }

        public Vehicle Vehicle { get; set; } = null!;

        public DateTime EntryTime { get; set; }

        public DateTime? ExitTime { get; set; }

        public decimal? DurationHours { get; set; }

        public decimal? TotalAmount { get; set; }

        public string Status { get; set; } = "PARKED";
    }
}
