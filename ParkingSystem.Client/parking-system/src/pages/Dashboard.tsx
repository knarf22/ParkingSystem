import ParkingCard from "../components/ParkingCard";
import StatCard from "../components/StatCard";

function Dashboard() {
    return (
        <div>
            {/* Page Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    Dashboard
                </h2>

                <p className="mt-1 text-gray-500">
                    Overview of your parking operations.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <StatCard
                    title="Occupied Slots"
                    value="32"
                />

                <StatCard
                    title="Available Slots"
                    value="18"
                />

                <StatCard
                    title="Today's Revenue"
                    value="₱4,850.00"
                />
            </div>
            <div>
                <ParkingCard />
            </div>
        </div>
    );
}

export default Dashboard;