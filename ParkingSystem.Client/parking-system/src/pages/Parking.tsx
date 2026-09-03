import { useEffect, useState } from "react";
import api from "../services/api";
import type { ParkingTransaction } from "../types/parking";
import CurrentParking from "../components/ParkingUI/CurrentParking";
import HeaderParking from "../components/ParkingUI/HeaderParking";
import EntryParking from "../components/ParkingUI/EntryParking";

function Parking() {
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

    useEffect(() => {
        loadTransactions();
    }, []);

    return (
        <div>
            {/* Page Header */}
            <HeaderParking />

            {/* Parking Entry */}
            <EntryParking />

            {/* Current Parking */}
            <CurrentParking exitParking={exitParkingTransaction} loading={loading} transactions={transactions} />

        </div>
    );
}

export default Parking;