import { useEffect, useState } from "react";
import api from "../services/api";
import type { ParkingTransaction } from "../types/parking";
import CurrentParking from "../components/ParkingUI/CurrentParking";
import HeaderParking from "../components/ParkingUI/HeaderParking";
import EntryParking from "../components/ParkingUI/EntryParking";
import { Search, X } from "lucide-react";

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

            <div className="relative mt-6 w-full md:w-96">
                <Search
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                />

                <input
                    type="text"
                    placeholder="Search plate or vehicle type..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-10
                   text-sm text-gray-700 outline-none
                   placeholder:text-gray-400
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                {search && (
                    <button
                        type="button"
                        onClick={() => setSearch("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2
                       text-gray-400 hover:text-gray-600"
                    >
                        <X className="h-4 w-4" />
                    </button>
                )}
            </div>

            {/* Current Parking */}
            <CurrentParking exitParking={exitParkingTransaction} loading={loading} transactions={filteredTransactions} />

        </div>
    );
}

export default Parking;