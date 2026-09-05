namespace ParkingSystem.Api.DTOs
{
    public class ParkingAvailabilityDto
    {
        public int ParkingClassId { get; set; }
        public string ClassName { get; set; } = string.Empty;
        public int Capacity { get; set; }
        public int Occupied { get; set; }
        public int Available { get; set; }
    }
}
