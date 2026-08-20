interface StatCardProps {
    title: string;
    value: string;
}

function StatCard({ title, value }: StatCardProps) {
    return (
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
            <p className="text-sm font-medium text-gray-500">
                {title}
            </p>

            <p className="mt-2 text-2xl font-bold text-gray-800">
                {value}
            </p>
        </div>
    );
}

export default StatCard;