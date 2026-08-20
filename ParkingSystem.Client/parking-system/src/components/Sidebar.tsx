import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="w-64 min-h-[calc(100vh-4rem)] bg-gray-900 text-white">
            <nav className="p-4 space-y-2">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg ${
                            isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-300 hover:bg-gray-800"
                        }`
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/parking"
                    className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg ${
                            isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-300 hover:bg-gray-800"
                        }`
                    }
                >
                    Parking
                </NavLink>

                <NavLink
                    to="/vehicles"
                    className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg ${
                            isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-300 hover:bg-gray-800"
                        }`
                    }
                >
                    Vehicles
                </NavLink>

                <NavLink
                    to="/rates"
                    className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg ${
                            isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-300 hover:bg-gray-800"
                        }`
                    }
                >
                    Parking Rates
                </NavLink>

            </nav>
        </aside>
    );
}

export default Sidebar;