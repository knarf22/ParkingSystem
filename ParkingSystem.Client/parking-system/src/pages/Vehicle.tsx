function Vehicle() {
    return (
        <div>
            {/* Page Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        Vehicles
                    </h2>

                    <p className="mt-1 text-gray-500">
                        Manage registered vehicles.
                    </p>
                </div>

                <button
                    type="button"
                    className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
                >
                    + Add Vehicle
                </button>
            </div>

            {/* Vehicles Table */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                Plate Number
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                Vehicle Type
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                Owner
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                Actions
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
                                Juan Dela Cruz
                            </td>

                            <td className="px-6 py-4">
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        type="button"
                                        className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
                                    >
                                        Delete
                                    </button>
                                </div>
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
                                Pedro Santos
                            </td>

                            <td className="px-6 py-4">
                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        type="button"
                                        className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Vehicle;