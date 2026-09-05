namespace ParkingSystem.Api.Models
{
    public class ParkingClass
    {
        public int Id { get; set; }

        public string ClassName { get; set; } = string.Empty;

        public int Capacity { get; set; }
    }
}
