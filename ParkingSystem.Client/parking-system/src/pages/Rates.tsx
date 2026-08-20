function Rates() {
    return (
        <div>
            {/* Page Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        Parking Rates
                    </h2>

                    <p className="mt-1 text-gray-500">
                        Manage parking rates and exceeding charges.
                    </p>
                </div>

                <button
                    type="button"
                    className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
                >
                    + Add Rate
                </button>
            </div>

            {/* Rates Table */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                Vehicle Type
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                Fixed Hours
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                Fixed Rate
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                Exceeding Rate
                            </th>

                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-t border-gray-100">
                            <td className="px-6 py-4 text-sm text-gray-700">
                                Car
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-700">
                                3 hours
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-700">
                                ₱50.00
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-700">
                                ₱20.00 / hour
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
                                Motorcycle
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-700">
                                3 hours
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-700">
                                ₱30.00
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-700">
                                ₱10.00 / hour
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
                                Van
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-700">
                                3 hours
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-700">
                                ₱70.00
                            </td>

                            <td className="px-6 py-4 text-sm text-gray-700">
                                ₱30.00 / hour
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

export default Rates;