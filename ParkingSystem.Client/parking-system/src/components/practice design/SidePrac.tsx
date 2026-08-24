import React from 'react'
import { NavLink } from 'react-router-dom'

const SidePrac = () => {
    return (
        <>
            <aside id="logo-sidebar" className=" bg-gray-900 text-white fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0"  aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
                    <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
                        <span className="self-center text-lg text-heading font-semibold whitespace-nowrap">Jose</span>
                    </a>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block px-4 py-3 rounded-lg ${isActive
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
                            `block px-4 py-3 rounded-lg ${isActive
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
                            `block px-4 py-3 rounded-lg ${isActive
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
                            `block px-4 py-3 rounded-lg ${isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-300 hover:bg-gray-800"
                            }`
                        }
                    >
                        Parking Rates
                    </NavLink>

                </div>
            </aside>
        </>
    )
}

export default SidePrac
