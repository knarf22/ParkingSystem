using Microsoft.EntityFrameworkCore;
using ParkingSystem.Api.Models;

namespace ParkingSystem.Api.Data
{
    public class ParkingDbContext : DbContext
    {
        public ParkingDbContext(DbContextOptions<ParkingDbContext> options): base(options)
        {
        }

        public DbSet<Vehicle> Vehicles => Set<Vehicle>();

        public DbSet<ParkingRate> ParkingRates => Set<ParkingRate>();

        public DbSet<ParkingTransaction> ParkingTransactions => Set<ParkingTransaction>();
        public DbSet<ParkingClass> ParkingClasses => Set<ParkingClass>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<ParkingRate>()
                .Property(p => p.FixedRate)
                .HasPrecision(18, 2);

            modelBuilder.Entity<ParkingRate>()
                .Property(p => p.ExceedingRate)
                .HasPrecision(18, 2);

            modelBuilder.Entity<ParkingTransaction>()
                .Property(p => p.DurationHours)
                .HasPrecision(18, 2);

            modelBuilder.Entity<Vehicle>()
                .HasOne(v => v.ParkingClass)
                .WithMany()
                .HasForeignKey(v => v.ParkingClassId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<ParkingClass>().HasData(
                new ParkingClass
                {
                    Id = 1,
                    ClassName = "Class 1",
                    Capacity = 50
                },
                new ParkingClass
                {
                    Id = 2,
                    ClassName = "Class 2",
                    Capacity = 10
                },
                new ParkingClass
                {
                    Id = 3,
                    ClassName = "Class 3",
                    Capacity = 30
                }
            );
        }

    }
}
