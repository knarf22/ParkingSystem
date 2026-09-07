import { useEffect, useState } from "react"
import api from "../services/api"
import ParkingAvailabilityCard from "./Dashboard/ParkingAvailabilityCard"
import type { AvailableParking } from "../types/parking"
import { GetProgressColor, GetVehicleType } from "../utilty/global"


const ParkingCard = () => {

    const [parkingAvail, setParkingAvail] = useState<AvailableParking[]>([])
    const getParkingAvailablity = async () => {

        const response = await api.get('/Parking/availability')

        console.log("ability", response.data)
        setParkingAvail(response.data)

    }

    useEffect(() => {
        getParkingAvailablity()
    }, [])



    return (
        <>
            <div className="mt-8">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800">
                        Parking Availability
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                        Current occupancy by parking class.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {parkingAvail.map(i => (
                        <ParkingAvailabilityCard
                            key={i.parkingClassId}
                            className={i.className}
                            vehicleTypes={GetVehicleType(i.className)!}
                            capacity={i.capacity}
                            occupied={i.occupied}
                            available={i.available}
                            progressColor={GetProgressColor(i.className)}
                        />
                    ))}

                    {/* <ParkingAvailabilityCard
                        className="Class 1"
                        vehicleTypes="Car / Van / SUV"
                        capacity={50}
                        occupied={32}
                        available={18}
                        progressColor="bg-blue-500"
                    />

                    <ParkingAvailabilityCard
                        className="Class 2"
                        vehicleTypes="Truck"
                        capacity={10}
                        occupied={4}
                        available={6}
                        progressColor="bg-orange-500"
                    />

                    <ParkingAvailabilityCard
                        className="Class 3"
                        vehicleTypes="Motorcycle / E-bike"
                        capacity={30}
                        occupied={21}
                        available={9}
                        progressColor="bg-purple-500"
                    /> */}

                </div>
            </div>
        </>
    )
}

export default ParkingCard
