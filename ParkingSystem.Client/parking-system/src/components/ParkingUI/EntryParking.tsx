import { useState } from "react";
import api from "../../services/api";

const EntryParking = () => {

    const getCurrentDateTime = () => {
        const now = new Date();

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");

        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const [plateNumber, setPlateNumber] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [selectedDate, setSelectedDate] = useState(getCurrentDateTime());
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
                    vehicleType: vehicleType,
                    entryTime: selectedDate
                })
            console.log(res.data)
            setPlateNumber("");
            setVehicleType("");
            setSelectedDate("");
        } catch (error: any) {
            setError(error.response.data || "failed to park")
        } finally {
            setLoading(false);
        }
    }
    if (error) {
        console.log("error", error)
    }

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800">
                Parking Entry
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">

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
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Select Date
                    </label>
                    <div className="relative max-w-sm">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" /></svg>
                        </div>
                        <input
                        
                            // type="date"
                            // id="default-datepicker"
                            type="datetime-local"
                            id="entry-time"
                            className="w-full rounded-lg  border-gray-300 ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5"
                            placeholder="Select date"
                            value={selectedDate}
                            onChange={(e) => {
                                setSelectedDate(e.target.value)
                                e.target.blur()
                            }}
                        />
                    </div>
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
