
import { Search, X } from "lucide-react";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

function SearchBar({
    value,
    onChange,
    placeholder = "Search...",
}: SearchBarProps) {
    return (
        <div className="relative mt-6 w-full md:w-96">
            <Search
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            />

            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-10
                           text-sm text-gray-700 outline-none
                           placeholder:text-gray-400
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            {value && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2
                               text-gray-400 hover:text-gray-600"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    );
}

export default SearchBar;