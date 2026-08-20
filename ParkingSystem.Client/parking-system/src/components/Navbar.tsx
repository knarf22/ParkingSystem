
const Navbar = () => {
  return (
    <nav className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      <h1 className="text-lg font-semibold text-gray-800">
        Parking Management System
      </h1>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
          A
        </div>

        <span className="text-sm font-medium text-gray-700">
          Admin
        </span>
      </div>
    </nav>
  )
}

export default Navbar
