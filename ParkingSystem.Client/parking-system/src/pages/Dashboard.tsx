import React from 'react'
import type { ParkingTransaction } from '../types/parking';

const transactions: ParkingTransaction[] = [
    {
        id: 1,
        plateNumber: "ABC-1234",
        vehicleType: "Car",
        entryTime: "08:00 AM",
        status: "PARKED",
    },
    {
        id: 2,
        plateNumber: "XYZ-5678",
        vehicleType: "Motorcycle",
        entryTime: "08:30 AM",
        status: "PARKED",
    },
];

const Dashboard = () => {
    return (
        <>
            <h1>Parking Management System Boi</h1>
            <div>
                <div>
                    <h3>Occupied Slots</h3>
                    <p>32</p>
                </div>
                <div>
                    <h3>Available Slots</h3>
                    <p>18</p>
                </div>
                <div>
                    <h3>Today's Revenue</h3>
                    <p>₱4,850.00</p>
                </div>
            </div>
            <h2>Current Parking</h2>
            {transactions.map((i) => (
                <div key={i.id}>
                    <p>Plate: {i.plateNumber}</p>
                    <p>Vehicle: {i.vehicleType}</p>
                    <p>Entry: {i.entryTime}</p>
                    <p>Status: {i.status}</p>
                </div>
            ))}

        </>
    )
}

export default Dashboard
