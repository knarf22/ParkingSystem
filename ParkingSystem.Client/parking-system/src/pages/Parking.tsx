import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
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
    const [isProcessing, setIsProcessing] = useState(false);

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
            await loadTransactions();

            return response.data;
        } catch (error) {
            console.error("Failed to load parking transactions:", error);
        } finally {
            setLoading(false);
        }
    };

    const filteredTransactions = transactions.filter(
        (transaction) =>
            transaction.plateNumber
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            transaction.vehicleType
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    useEffect(() => {
        loadTransactions();
    }, []);

    return (
        <div className="relative min-h-screen overflow-y-auto [scrollbar-gutter:stable]">
            {/* Page Header */}
            <HeaderParking />

            {/* Parking Entry */}
            <EntryParking
                onSuccess={loadTransactions}
                setProcessing={setIsProcessing}
            />

            {/* Search Bar */}
            <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Search plate or vehicle type..."
            />

            {/* Current Parking */}
            <CurrentParking
                exitParking={exitParkingTransaction}
                loading={loading}
                transactions={filteredTransactions}
            />

            {/* Full Page Loading Overlay */}
            {isProcessing && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
                    <div className="flex flex-col items-center gap-3 rounded-xl bg-white px-8 py-6 shadow-xl">
                        <LoaderCircle className="h-8 w-8 animate-spin text-blue-600" />

                        <p className="text-sm font-medium text-gray-700">
                            Parking vehicle...
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Parking;