import { useState } from "react";
import api from "../../services/api";

const EntryParking = () => {

    const [plateNumber, setPlateNumber] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleParkVehicle = async () => {
        setError("");
        if (!plateNumber.trim()) {
            setError("Enter plate number");
            return
        }
        if (!vehicleType) {
            setError("Choose vehicle type");
            return
        }

        try {
            setLoading(true)

            const res = await api.post("/Parking",
                {
                    plateNumber: plateNumber.trim(),
                    vehicleType: vehicleType
                })
            console.log(res.data)
            setPlateNumber("");
            setVehicleType("");
        } catch (error: any) {
            setError(error.response.data || "failed to park")
        } finally {
            setLoading(false);
        }
    }
    if(error){
        console.log("error", error)
    }

    return (
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
                        value={plateNumber}
                        onChange={(e) => setPlateNumber(e.target.value)}
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
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}

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
                    onClick={handleParkVehicle}
                    disabled={loading}
                    type="button"
                    className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
                >
                    {loading ? "Parking..." : "Park Vehicle"}
                </button>
            </div>
        </div>
    )
}

export default EntryParking
