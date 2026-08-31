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
        }
    }
}
