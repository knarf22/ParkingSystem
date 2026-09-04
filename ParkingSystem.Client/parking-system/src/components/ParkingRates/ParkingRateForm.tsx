import type { ParkingRateFormProps } from '../../types/parking'



const ParkingRateForm = ({
    setIsModalOpen,
    formData,
    setFormData,
    addRate }: ParkingRateFormProps) => {

    return (
        <>

            {/* Form */}
            <div className="space-y-4">
                {/* Vehicle Type */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Vehicle Type
                    </label>
                    <input
                        value={formData.vehicleType}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                vehicleType: e.target.value
                            })
                        }
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 focus:border-blue-500 focus:outline-none"
                    >

                    </input>
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

        </>
    )
}

export default ParkingRateForm
