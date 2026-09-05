using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ParkingSystem.Api.Migrations
{
    /// <inheritdoc />
    public partial class addParkingclass : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ParkingClassId",
                table: "Vehicles",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ParkingClasses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClassName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Capacity = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ParkingClasses", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "ParkingClasses",
                columns: new[] { "Id", "Capacity", "ClassName" },
                values: new object[,]
                {
                    { 1, 50, "Class 1" },
                    { 2, 10, "Class 2" },
                    { 3, 30, "Class 3" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_ParkingClassId",
                table: "Vehicles",
                column: "ParkingClassId");

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicles_ParkingClasses_ParkingClassId",
                table: "Vehicles",
                column: "ParkingClassId",
                principalTable: "ParkingClasses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vehicles_ParkingClasses_ParkingClassId",
                table: "Vehicles");

            migrationBuilder.DropTable(
                name: "ParkingClasses");

            migrationBuilder.DropIndex(
                name: "IX_Vehicles_ParkingClassId",
                table: "Vehicles");

            migrationBuilder.DropColumn(
                name: "ParkingClassId",
                table: "Vehicles");
        }
    }
}
