
import { useEffect, useState } from "react";
// Tailwind CSS used, no CSS module import
import { Link } from "react-router-dom";

function Home() {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/")
        .then(res => res.json())
    .then(data => setEvents(data))
        
    }, [])
    
    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">
            <Link to="/admin" className="text-blue-900/80 text-xs text-center block mb-2">Are you an Admin?</Link>
            <div className="text-blue-700 text-2xl font-bold text-center mb-6">Upcoming Events</div>
            <ul className="list-none p-0 m-0">
                {events.map((event, id) => (
                    <li
                        className="bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg mb-4 p-5 shadow flex flex-col gap-2 hover:shadow-lg transition"
                        key={id}
                    >
                        <div className="text-lg font-semibold text-blue-900">{event.title}</div>
                        <div className="text-gray-700 text-base">{event.description}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Home;
