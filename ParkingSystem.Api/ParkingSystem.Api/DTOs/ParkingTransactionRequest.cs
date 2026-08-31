namespace ParkingSystem.Api.DTOs
{
    public class ParkingTransactionRequest
    {
        public string PlateNumber { get; set; } = string.Empty;
        public string VehicleType { get; set; } = string.Empty;
        public DateTime EntryTime { get; set; }
    }
}
