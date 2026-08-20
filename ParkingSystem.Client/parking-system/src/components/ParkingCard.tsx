import React from 'react'

const ParkingCard = () => {
    return (
        <>
            <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800">
                    Current Parking
                </h3>

                <div className="mt-4 overflow-hidden rounded-xl bg-white shadow-sm border border-gray-200">
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
                            <tr className="border-t border-gray-100">
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    ABC-1234
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-700">
                                    Car
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-700">
                                    08:00 AM
                                </td>

                                <td className="px-6 py-4">
                                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                        PARKED
                                    </span>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-100">
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    XYZ-5678
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-700">
                                    Motorcycle
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-700">
                                    08:30 AM
                                </td>

                                <td className="px-6 py-4">
                                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                        PARKED
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ParkingCard
