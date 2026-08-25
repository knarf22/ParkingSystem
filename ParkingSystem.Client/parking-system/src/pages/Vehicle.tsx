import { useState } from "react";
import Modal from "../components/Modal";
import api from "../services/api";
import HeaderVehicle from "../components/VehicleUI/HeaderVehicle";

interface Vehicle {
    id: number;
    plateNumber: string;
    vehicleType: string;
    owner: string;
}

function Vehicle() {

    const createVehicle = async (
        vehicle: Omit<Vehicle, "id">
    ) => {
        const response = await api.post("/Vehicles", vehicle);
        return response.data;
    };

    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingVehicleId, setEditingVehicleId] = useState<number | null>(null);


    const [plateNumber, setPlateNumber] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [owner, setOwner] = useState("");

    const handleSaveVehicle = async () => {
        if (!plateNumber || !vehicleType || !owner) {
            return;
        }

        const vehicleData = {
            plateNumber,
            vehicleType,
            owner
        };
        if (editingVehicleId != null) {
            setVehicles(
                vehicles.map((vehicle) =>
                    vehicle.id === editingVehicleId
                        ? {
                            ...vehicle,
                            plateNumber,
                            vehicleType,
                            owner
                        }
                        : vehicle
                )
            );

        } else {
            const newVehicle = await createVehicle(vehicleData);

            setVehicles((currentVehicles) => [
                ...currentVehicles,
                newVehicle
            ]);
        }
        resetForm();

    };
    const resetForm = () => {
        setPlateNumber("");
        setVehicleType("");
        setOwner("");
        setEditingVehicleId(null);
        setIsModalOpen(false);
    };
    const handleEdit = (vehicle: Vehicle) => {
        setEditingVehicleId(vehicle.id);

        setPlateNumber(vehicle.plateNumber);
        setVehicleType(vehicle.vehicleType);
        setOwner(vehicle.owner);

        setIsModalOpen(true);
    };
    const handleDelete = (id: number) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this vehicle?"
        );

        if (!confirmed) {
            return;
        }

        setVehicles(
            vehicles.filter((vehicle) => vehicle.id !== id)
        );
    };

    return (
        <div>
            {/* Page Header */}
            <HeaderVehicle setIsModal={setIsModalOpen} />
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
                        {vehicles.map((vehicle) => (
                            <tr
                                key={vehicle.id}
                                className="border-t border-gray-100"
                            >
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {vehicle.plateNumber}
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {vehicle.vehicleType}
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {vehicle.owner}
                                </td>

                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleEdit(vehicle)}
                                            type="button"
                                            className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => handleDelete(vehicle.id)}
                                            type="button"
                                            className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Vehicle Modal */}
            <Modal
                isOpen={isModalOpen}
                title={
                    editingVehicleId !== null
                        ? "Edit Vehicle"
                        : "Add Vehicle"
                }
                onClose={resetForm}
            // isOpen={isModalOpen}
            // title="Add Vehicle"
            // onClose={() => setIsModalOpen(false)}
            >
                <div className="space-y-4">

                    {/* Plate Number */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Plate Number
                        </label>

                        <input
                            type="text"
                            value={plateNumber}
                            onChange={(e) => setPlateNumber(e.target.value)}
                            placeholder="ABC-1234"
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
                            <option value="">
                                Select vehicle type
                            </option>

                            <option value="Car">
                                Car
                            </option>

                            <option value="Motorcycle">
                                Motorcycle
                            </option>

                            <option value="Van">
                                Van
                            </option>
                        </select>
                    </div>

                    {/* Owner */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Owner
                        </label>

                        <input
                            type="text"
                            value={owner}
                            onChange={(e) => setOwner(e.target.value)}
                            placeholder="Juan Dela Cruz"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            onClick={handleSaveVehicle}
                            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
                        >
                            {editingVehicleId !== null
                                ? "Save Changes"
                                : "Add Vehicle"}
                        </button>
                    </div>

                </div>
            </Modal>
        </div>
    );
}

export default Vehicle;
