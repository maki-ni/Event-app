
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
// Tailwind CSS used, no CSS module import
import { useNavigate } from "react-router-dom"

function AdminDashboard() {
    const navigate = useNavigate();
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000")
            .then(res => res.json())
        .then(data => setEvents(data))
    })
    function deleteEvent(id) {
        if (window.confirm("Are you sure you want to delete this event?")) {
            fetch(`http://localhost:3000/event/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        }
        
    }
    
    
    return (
        <>
            <Navbar />
            <div className="max-w-2xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">
                <div className="text-blue-700 text-2xl font-bold text-center mb-6">Upcoming Events</div>
                <ul className="list-none p-0 m-0">
                    {events.map((event, id) => (
                        <li
                            className="bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg mb-4 p-5 shadow flex flex-col gap-2 hover:shadow-lg transition"
                            key={id}
                        >
                            <div className="text-lg font-semibold text-blue-900">{event.title}</div>
                            <div className="text-gray-700 text-base">{event.description}</div>
                            <div className="flex gap-2 mt-2">
                                <button
                                    onClick={() => navigate(`/event/edit/${event._id}`)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteEvent(event._id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default AdminDashboard