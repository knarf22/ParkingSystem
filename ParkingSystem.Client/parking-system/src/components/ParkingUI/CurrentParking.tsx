import type { ParkingTransaction } from '../../types/parking';

interface CurrentParking {
    loading: boolean;
    transactions: ParkingTransaction[]
    exitParking: (id: number) => void;
}

const CurrentParking = ({ loading, transactions, exitParking }: CurrentParking) => {
    return (
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
                                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                    Action
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
                                            className={`rounded-full px-3 py-1 text-xs font-medium ${transaction.status === "PARKED"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {transaction.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button 
                                        onClick={() => exitParking(transaction.id)}
                                        className='ml-4 cursor-pointer bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>
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
    )
}

export default CurrentParking
