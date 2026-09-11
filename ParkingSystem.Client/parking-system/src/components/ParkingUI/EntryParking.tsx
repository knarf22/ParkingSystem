import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import api from "../../services/api";
import { GetVehicleTypesForSelect } from "../../utilty/global";

interface EntryParkingProps {
    onSuccess: () => void | Promise<void>;
    setProcessing: (value: boolean) => void;
}

const EntryParking = ({ onSuccess, setProcessing }: EntryParkingProps) => {
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
    const [selectedDate, setSelectedDate] = useState(
        getCurrentDateTime()
    );

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleParkVehicle = async () => {
        setError("");

        if (!plateNumber.trim()) {
            setError("Enter plate number");
            return;
        }

        if (!vehicleType) {
            setError("Choose vehicle type");
            return;
        }

        try {
            setLoading(true);
            setProcessing(true);

            await api.post("/Parking", {
                plateNumber: plateNumber.trim(),
                vehicleType: vehicleType,
                entryTime: selectedDate,
            });

            await onSuccess();

            // Artificial delay para makita ang loading state
            await new Promise((resolve) => setTimeout(resolve, 2000));

            setPlateNumber("");
            setVehicleType("");
            setSelectedDate(getCurrentDateTime());

        } catch (error: any) {
            setError(
                error?.response?.data?.message ||
                error?.response?.data ||
                "Failed to park vehicle"
            );
        } finally {
            setLoading(false);
            setProcessing(false);
        }
    };

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
                        onChange={(e) =>
                            setPlateNumber(e.target.value)
                        }
                        type="text"
                        placeholder="Enter plate number"
                        disabled={loading}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none
                                   focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                                   disabled:cursor-not-allowed disabled:bg-gray-100"
                    />
                </div>

                {/* Vehicle Type */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Vehicle Type
                    </label>

                    <select
                        value={vehicleType}
                        onChange={(e) =>
                            setVehicleType(e.target.value)
                        }
                        disabled={loading}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none
                                   focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                                   disabled:cursor-not-allowed disabled:bg-gray-100"
                    >
                        <option value="">
                            Select vehicle type
                        </option>

                        {GetVehicleTypesForSelect().map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Select Date */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Select Date
                    </label>

                    <div className="relative max-w-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                                className="h-4 w-4 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
                                />
                            </svg>
                        </div>

                        <input
                            type="datetime-local"
                            id="entry-time"
                            value={selectedDate}
                            disabled={loading}
                            onChange={(e) => {
                                setSelectedDate(e.target.value);
                                e.target.blur();
                            }}
                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 pl-9 text-sm
                                       text-gray-700 outline-none
                                       focus:border-blue-500 focus:ring-2 focus:ring-blue-100
                                       disabled:cursor-not-allowed disabled:bg-gray-100"
                        />
                    </div>
                </div>
            </div>

            {/* Error */}
            {error && (
                <p className="mt-4 text-sm font-medium text-red-600">
                    {error}
                </p>
            )}

            {/* Button */}
            <div className="mt-6">
                <button
                    onClick={handleParkVehicle}
                    disabled={loading}
                    type="button"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5
                               font-medium text-white transition
                               hover:bg-blue-700
                               disabled:cursor-not-allowed disabled:opacity-70"
                >
                    {loading && (
                        <LoaderCircle className="h-4 w-4 animate-spin" />
                    )}

                    {loading ? "Parking..." : "Park Vehicle"}
                </button>
            </div>
        </div>
    );
};

export default EntryParking;