import { useEffect, useState } from "react";
import api from "../services/api";
import type { ParkingTransaction } from "../types/parking";

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

    useEffect(() => {
        loadTransactions();
    }, []);

    return (
        <div>
            {/* Page Header */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    Parking
                </h2>

                <p className="mt-1 text-gray-500">
                    Manage vehicle entry and exit.
                </p>
            </div>

            {/* Parking Entry */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800">
                    Parking Entry
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">

                    {/* Plate Number */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Plate Number
                        </label>

                        <input
                            type="text"
                            placeholder="Enter plate number"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    {/* Vehicle Type */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Vehicle Type
                        </label>

                        <select
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                            <option value="">Select vehicle type</option>
                            <option value="Car">Car</option>
                            <option value="Motorcycle">Motorcycle</option>
                            <option value="Van">Van</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="button"
                        className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
                    >
                        Park Vehicle
                    </button>
                </div>
            </div>

            {/* Current Parking */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800">
                    Current Parking
                </h3>

                <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

                    {loading ? (
                        <div className="p-6 text-gray-500">
                            Loading parking transactions...
                        </div>
                    ) : transactions.length === 0 ? (
                        <div className="p-6 text-gray-500">
                            No parking transactions found.
                        </div>
                    ) : (
                        <table className="w-full text-left">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                        Plate Number
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                        Vehicle
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                        Entry Time
                                    </th>

                                    <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                        Status
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {transactions.map((transaction) => (
                                    <tr
                                        key={transaction.id}
                                        className="border-t border-gray-100"
                                    >
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            {transaction.plateNumber}
                                        </td>

                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            {transaction.vehicleType}
                                        </td>

                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            {new Date(
                                                transaction.entryTime
                                            ).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </td>

                                        <td className="px-6 py-4">
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-medium ${
                                                    transaction.status === "PARKED"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-gray-100 text-gray-700"
                                                }`}
                                            >
                                                {transaction.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Parking;