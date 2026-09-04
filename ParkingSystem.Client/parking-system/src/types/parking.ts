
export interface ParkingTransaction {
    id: number;
    vehicleId: number;
    plateNumber: string;
    vehicleType: string;
    owner: string;
    entryTime: string;
    exitTime?: string | null;
    durationHours?: number;
    totalAmount?: number;
    status: "PARKED" | "COMPLETED";
}



export interface ParkingRates {
    id : number;
    vehicleType: string;
    fixedHours: number;
    fixedRate: number;
    exceedingRate: number;
}

export interface CreateParkingRates {
    vehicleType: string;
    fixedHours: number | "";
    fixedRate: number | "";
    exceedingRate: number | "";
}

export interface IsModalProps {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    formData: CreateParkingRates
    setFormData: React.Dispatch<React.SetStateAction<CreateParkingRates>>
    addRate : () => void
}