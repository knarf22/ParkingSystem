import type { IsModalProps } from '../../types/parking'



const IsModal = ({
    isModalOpen,
    setIsModalOpen,
    formData,
    setFormData,
    addRate }: IsModalProps) => {

    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">

                        {/* Modal Header */}
                        <div className="mb-5 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-gray-800">
                                Add Parking Rate
                            </h3>

                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="cursor-pointer text-xl text-gray-400 hover:text-gray-600"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Form */}
                        <div className="space-y-4">

                            {/* Vehicle Type */}
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Vehicle Type
                                </label>

                                <select
                                    value={formData.vehicleType}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            vehicleType: e.target.value
                                        })
                                    }
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:border-blue-500 focus:outline-none"
                                >
                                    <option value="">Select vehicle type</option>
                                    <option value="Car">Car</option>
                                    <option value="Motorcycle">Motorcycle</option>
                                    <option value="Truck">Truck</option>
                                    <option value="Van">Van</option>
                                </select>
                            </div>

                            {/* Fixed Hours */}
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Fixed Hours
                                </label>

                                <input
                                    type="number"
                                    value={formData.fixedHours}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            fixedHours: e.target.value === ""
                                                ? ""
                                                : Number(e.target.value)
                                        })
                                    }
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Fixed Rate */}
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Fixed Rate
                                </label>

                                <input
                                    type="number"
                                    value={formData.fixedRate}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            fixedRate: e.target.value === ""
                                                ? ""
                                                : Number(e.target.value)
                                        })
                                    }
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Exceeding Rate */}
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Exceeding Rate / Hour
                                </label>

                                <input
                                    type="number"
                                    value={formData.exceedingRate}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            exceedingRate: e.target.value === ""
                                                ? ""
                                                : Number(e.target.value)
                                        })
                                    }
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:border-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-600 hover:bg-gray-50"
                            >
                                Cancel
                            </button>

                            <button
                                type="button"
                                className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                                onClick={addRate}
                            >
                                Save Rate
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default IsModal
