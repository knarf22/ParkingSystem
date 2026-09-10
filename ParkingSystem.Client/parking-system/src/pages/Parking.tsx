import { useEffect, useState } from "react";
import api from "../services/api";
import type { ParkingTransaction } from "../types/parking";
import CurrentParking from "../components/ParkingUI/CurrentParking";
import HeaderParking from "../components/ParkingUI/HeaderParking";
import EntryParking from "../components/ParkingUI/EntryParking";
import SearchBar from "../components/ParkingUI/SearchBar";

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

            {/* Search Bar */}
            <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Search plate or vehicle type..."
            />

            {/* Current Parking */}
            <CurrentParking exitParking={exitParkingTransaction} loading={loading} transactions={filteredTransactions} />

        </div>
    );
}

export default Parking;