function Parking() {
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
                            <option value="car">Car</option>
                            <option value="motorcycle">Motorcycle</option>
                            <option value="van">Van</option>
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
                                    Action
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
                                    <button
                                        type="button"
                                        className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
                                    >
                                        Exit
                                    </button>
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
                                    <button
                                        type="button"
                                        className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
                                    >
                                        Exit
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Parking;