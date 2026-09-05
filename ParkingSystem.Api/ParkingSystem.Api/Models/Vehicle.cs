namespace ParkingSystem.Api.Models
{
    public class Vehicle
    {
        public int Id { get; set; }

        public string PlateNumber { get; set; } = string.Empty;

        public string VehicleType { get; set; } = string.Empty;

        public int? ParkingClassId { get; set; }

        public ParkingClass? ParkingClass { get; set; }

    }
}
