export const GetVehicleType  = (classType : string) => {

    switch (classType) {
        case "Class 1":
            return "Car / Van / SUV"

        case "Class 2":
            return "Truck"

        case "Class 3":
            return "Motorcycle / eBike"

        default:
            break;
    }
}

export const GetProgressColor = (classType: string) => {
    switch (classType) {
        case "Class 1":
            return "bg-blue-500";

        case "Class 2":
            return "bg-orange-500";

        case "Class 3":
            return "bg-purple-500";

        default:
            return "bg-gray-500";
    }
};