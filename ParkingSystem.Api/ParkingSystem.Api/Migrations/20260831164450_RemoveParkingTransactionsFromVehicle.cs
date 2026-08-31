using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParkingSystem.Api.Migrations
{
    /// <inheritdoc />
    public partial class RemoveParkingTransactionsFromVehicle : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ParkingTransactions_Vehicles_VehicleId",
                table: "ParkingTransactions");

            migrationBuilder.AddForeignKey(
                name: "FK_ParkingTransactions_Vehicles_VehicleId",
                table: "ParkingTransactions",
                column: "VehicleId",
                principalTable: "Vehicles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ParkingTransactions_Vehicles_VehicleId",
                table: "ParkingTransactions");

            migrationBuilder.AddForeignKey(
                name: "FK_ParkingTransactions_Vehicles_VehicleId",
                table: "ParkingTransactions",
                column: "VehicleId",
                principalTable: "Vehicles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
