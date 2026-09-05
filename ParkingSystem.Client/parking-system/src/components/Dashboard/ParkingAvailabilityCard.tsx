interface ParkingAvailabilityCardProps {
    className: string;
    vehicleTypes: string;
    capacity: number;
    occupied: number;
    available: number;
    progressColor: string;
}

function ParkingAvailabilityCard({
    className,
    vehicleTypes,
    capacity,
    occupied,
    available,
    progressColor
}: ParkingAvailabilityCardProps) {

    const percentage = capacity > 0
        ? (occupied / capacity) * 100
        : 0;

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {className}
                </h3>

                <p className="text-sm text-gray-500">
                    {vehicleTypes}
                </p>
            </div>

            <div className="mb-2 flex items-end justify-between">
                <span className="text-2xl font-bold text-gray-800">
                    {occupied}
                    <span className="text-base font-normal text-gray-400">
                        {" / "}{capacity}
                    </span>
                </span>

                <span className="text-sm text-gray-500">
                    occupied
                </span>
            </div>

            {/* Progress Bar */}
            <div className="mb-5 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <div
                    className={`h-full rounded-full ${progressColor}`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                />
            </div>

            <div className="flex justify-between border-t border-gray-100 pt-4">
                <div>
                    <p className="text-xs text-gray-500">
                        Occupied
                    </p>

                    <p className="font-semibold text-gray-800">
                        {occupied}
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-xs text-gray-500">
                        Available
                    </p>

                    <p className="font-semibold text-gray-800">
                        {available}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default ParkingAvailabilityCard;