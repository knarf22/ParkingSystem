
export interface ParkingTransaction {
    id : number;
    vehicleId: number;
    plateNumber : string;
    vehicleType : string;
    owner : string;
    entryTime: string;
    exitTime?: string | null;
    durationHours?: number;
    totalAmount?: number;
    status : "PARKED" | "COMPLETED";
}