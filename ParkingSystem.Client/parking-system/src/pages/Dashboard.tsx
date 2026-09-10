import { useEffect, useState } from "react";
import ParkingCard from "../components/ParkingCard";
import StatCard from "../components/StatCard";
import api from "../services/api";
import type { Dashboard } from "../types/parking";

function Dashboard() {
    const [transactions, setTransactions] = useState<Dashboard | null>(null);
    const [loading, setLoading] = useState(true);

    const loadTransactions = async () => {
        try {
            const response = await api.get<Dashboard>("/Parking/dashboard");

            setTransactions(response.data);
        } catch (error) {
            console.error("Failed to load parking transactions:", error);
        } finally {
            setLoading(false);
        }
    };




    useEffect(() => {
        loadTransactions();
    }, []);
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
                    value={`${transactions?.totalOccupied.toFixed() ?? "0"}`}
                />

                <StatCard
                    title="Available Slots"
                    value={`${transactions?.totalAvailable.toFixed() ?? "0"}`}
                />

                <StatCard
                    title="Today's Revenue"
                    value={`₱${transactions?.totalRevenue.toFixed(2) ?? "0"} `}
                />
            </div>
            <div>
                <ParkingCard />
            </div>
        </div>
    );
}

export default Dashboard;