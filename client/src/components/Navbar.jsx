
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// Tailwind CSS used, no CSS module import
import CreateEvent from "../pages/CreateEvent";

function Navbar() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        const token = localStorage.getItem("token");
        if (token) {
            localStorage.removeItem("token");
            navigate('/')
        }
    }
    return (
        <nav className="flex items-center justify-between bg-gradient-to-r from-blue-200 to-blue-100 p-4 shadow">
            <div className="text-2xl font-bold text-blue-700" id="logo">Event Admin</div>
            <ul className="flex gap-6 list-none m-0 p-0">
                <li>
                    <Link to="/event/create" className="text-blue-700 hover:text-blue-900 transition">Create an Event</Link>
                </li>
                <li>
                    <Link to="/admin/create" className="text-blue-700 hover:text-blue-900 transition">Create a new Admin</Link>
                </li>
                <li>
                    <Link to="/admin/delete" className="text-blue-700 hover:text-blue-900 transition">Delete an Admin</Link>
                </li>
                <li>
                    <button
                        className="text-blue-700 hover:text-blue-900 transition font-semibold bg-transparent border-none cursor-pointer"
                        onClick={handleLogout}
                    >
                        Log Out
                    </button>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;