
export interface ParkingTransaction {
    id : number;
    plateNumber : string;
    vehicleType : string;
    entryTime: string;
    exitTime?: string;
    durationHours?: number;
    totalAmount?: number;
    status : "PARKED" | "COMPLETED";
}