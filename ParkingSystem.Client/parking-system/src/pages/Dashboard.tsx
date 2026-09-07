import { useEffect, useState } from "react";
import ParkingCard from "../components/ParkingCard";
import StatCard from "../components/StatCard";
import api from "../services/api";
import type { ParkingTransaction } from "../types/parking";

function Dashboard() {
    const [transactions, setTransactions] = useState<ParkingTransaction[]>([]);
    const [loading, setLoading] = useState(true);

    const loadTransactions = async () => {
        try {
            const response = await api.get<ParkingTransaction[]>("/Parking");

            setTransactions(response.data);
        } catch (error) {
            console.error("Failed to load parking transactions:", error);
        } finally {
            setLoading(false);
        }
    };

    const todayRevenue = transactions
        .filter(t => {
            const today = new Date().toDateString();
            return (
                t.status === "COMPLETED" &&
                new Date(t.exitTime!).toDateString() === today
            );
        })
        .reduce((total, t) => total + (t.totalAmount ?? 0), 0);


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
                    value="32"
                />

                <StatCard
                    title="Available Slots"
                    value="18"
                />

                <StatCard
                    title="Today's Revenue"
                    value={`₱${todayRevenue.toFixed(2)}`}
                />
            </div>
            <div>
                <ParkingCard />
            </div>
        </div>
    );
}

export default Dashboard;