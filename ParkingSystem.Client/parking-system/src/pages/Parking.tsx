import { useEffect, useState } from "react";
import api from "../services/api";
import type { ParkingTransaction } from "../types/parking";
import CurrentParking from "../components/ParkingUI/CurrentParking";
import HeaderParking from "../components/ParkingUI/HeaderParking";
import EntryParking from "../components/ParkingUI/EntryParking";

function Parking() {
    const [search, setSearch] = useState("");
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

    const exitParkingTransaction = async (exitParkingId: number) => {
        try {
            const response = await api.put(`/Parking/${exitParkingId}/exit`);
            await loadTransactions(); // ← ITO ang nagre-fetch

            return response.data;
        } catch (error) {
            console.error("Failed to load parking transactions:", error);
        } finally {
            setLoading(false);
        }
    }

    const filteredTransactions = transactions.filter(transaction =>
        transaction.plateNumber.toLowerCase().includes(search.toLowerCase()) ||
        transaction.vehicleType.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        loadTransactions();
    }, []);

    return (
        <div className="min-h-screen overflow-y-auto [scrollbar-gutter:stable]">
            {/* Page Header */}
            <HeaderParking />

            {/* Parking Entry */}
            <EntryParking onSuccess={loadTransactions} />

            <div className="mt-6">
                <input
                    type="text"
                    placeholder="Search plate number..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2
                   text-sm outline-none
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                   md:w-80"
                />
            </div>

            {/* Current Parking */}
            <CurrentParking exitParking={exitParkingTransaction} loading={loading} transactions={filteredTransactions} />

        </div>
    );
}

export default Parking;