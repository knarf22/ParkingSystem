import { useEffect, useState } from "react";
import type { CreateParkingRates, ParkingRates } from "../types/parking";
import api from "../services/api";
import ParkingRateForm from "../components/ParkingRates/ParkingRateForm";
import Modal from "../components/Modal";

function Rates() {

    const [rates, setRates] = useState<ParkingRates[]>([])
    const [loading, setLoading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState<CreateParkingRates>({
        vehicleType: "",
        fixedHours: "",
        fixedRate: "",
        exceedingRate: "",
    });

    const getAllRates = async () => {
        setLoading(true)

        try {
            const res = await api.get<ParkingRates[]>('/ParkingRates');
            setRates(res.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const addRate = async () => {
        try {
            await api.post<CreateParkingRates>('/ParkingRates', formData)

            setIsModalOpen(false)

            setFormData({
                vehicleType: "",
                fixedHours: 0,
                fixedRate: 0,
                exceedingRate: 0,
            })
            await getAllRates();

            console.log("done")

        } catch (error) {
            console.log(error)
        } finally {

        }
    }


    useEffect(() => {
        getAllRates();
    }, [])

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
                    className="cursor-pointer rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
                    onClick={() => setIsModalOpen(true)}
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
                        {rates.map((i) => (
                            <tr key={i.id} className="border-t border-gray-100">
                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {i.vehicleType}
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-700">
                                    {i.fixedHours}
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-700">
                                    ₱{i.fixedRate.toFixed(2)}
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-700">
                                    ₱{i.exceedingRate.toFixed(2)} / hour
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
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MODAL */}
            <Modal
                isOpen={isModalOpen}
                title="Add Parking Rate"
                onClose={() => setIsModalOpen(false)}
            >
                <ParkingRateForm
                    formData={formData}
                    setIsModalOpen={setIsModalOpen}
                    setFormData={setFormData}
                    addRate={addRate}
                />
            </Modal>

        </div>
    );
}

export default Rates;