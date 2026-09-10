import { useState } from "react";
import {
    ArrowDown,
    ArrowUp,
    ArrowUpDown,
} from "lucide-react";
import type { ParkingTransaction } from "../../types/parking";

type SortField =
    | "plateNumber"
    | "vehicleType"
    | "entryTime"
    | "status";

type SortDirection = "asc" | "desc";

interface CurrentParkingProps {
    loading: boolean;
    transactions: ParkingTransaction[];
    exitParking: (id: number) => void;
}

const CurrentParking = ({
    loading,
    transactions,
    exitParking,
}: CurrentParkingProps) => {
    const [sortField, setSortField] = useState<SortField | null>(null);
    const [sortDirection, setSortDirection] =
        useState<SortDirection>("asc");

    const handleSort = (field: SortField) => {
        if (sortField !== field) {
            // First click
            setSortField(field);
            setSortDirection("asc");
            return;
        }

        if (sortDirection === "asc") {
            // Second click
            setSortDirection("desc");
        } else {
            // Third click - clear sorting
            setSortField(null);
            setSortDirection("asc");
        }
    };

    const sortedTransactions = [...transactions].sort((a, b) => {
        if (!sortField) {
            return 0;
        }

        let comparison = 0;

        switch (sortField) {
            case "plateNumber":
                comparison = a.plateNumber.localeCompare(
                    b.plateNumber
                );
                break;

            case "vehicleType":
                comparison = a.vehicleType.localeCompare(
                    b.vehicleType
                );
                break;

            case "entryTime":
                comparison =
                    new Date(a.entryTime).getTime() -
                    new Date(b.entryTime).getTime();
                break;

            case "status":
                comparison = a.status.localeCompare(b.status);
                break;
        }

        return sortDirection === "asc"
            ? comparison
            : -comparison;
    });

    const SortHeader = ({
        label,
        field,
    }: {
        label: string;
        field: SortField;
    }) => {
        const isActive = sortField === field;

        return (
            <button
                type="button"
                onClick={() => handleSort(field)}
                className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-gray-900"            >
                {label}

                {!isActive && (
                    <ArrowUpDown className="h-4 w-4 text-gray-400" />
                )}

                {isActive && sortDirection === "asc" && (
                    <ArrowUp className="h-4 w-4 text-blue-500" />
                )}

                {isActive && sortDirection === "desc" && (
                    <ArrowDown className="h-4 w-4 text-blue-500" />
                )}
            </button>
        );
    };

    return (
        <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800">
                Current Parking
            </h3>

            <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
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
                                <th className="px-6 py-4">
                                    <SortHeader
                                        label="Plate Number"
                                        field="plateNumber"
                                    />
                                </th>

                                <th className="px-6 py-4">
                                    <SortHeader
                                        label="Vehicle"
                                        field="vehicleType"
                                    />
                                </th>

                                <th className="px-6 py-4">
                                    <SortHeader
                                        label="Entry Time"
                                        field="entryTime"
                                    />
                                </th>

                                <th className="px-6 py-4">
                                    <SortHeader
                                        label="Status"
                                        field="status"
                                    />
                                </th>

                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {sortedTransactions.map((transaction) => (
                                <tr
                                    key={transaction.id}
                                    className="border-t border-gray-100 transition hover:bg-gray-50"
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
                                            className={`rounded-full px-3 py-1 text-xs font-medium ${transaction.status ===
                                                "PARKED"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {transaction.status}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() =>
                                                exitParking(
                                                    transaction.id
                                                )
                                            }
                                            className="cursor-pointer rounded-full bg-green-500 px-4 py-2 font-bold text-white transition hover:bg-red-600"
                                        >
                                            Exit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default CurrentParking;