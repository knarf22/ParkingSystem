import React from 'react'


const HeaderVehicle = ({ setIsModal }: { setIsModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <>
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
                    onClick={() => setIsModal(true)}
                    className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
                >
                    + Add Vehicle
                </button>
            </div>

        </>
    )
}

export default HeaderVehicle
