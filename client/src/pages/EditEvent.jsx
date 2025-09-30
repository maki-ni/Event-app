import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";

function EditEvent() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    const updateEvents = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/event/${id}`, 
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                    
                },
                body: JSON.stringify({title, description})
                    
                
            }
        )
        navigate("/admin");
    }
    
    return (
        <>
            <Navbar></Navbar>
        <form
            className="bg-white max-w-md mx-auto mt-12 rounded-xl shadow-lg p-8 flex flex-col gap-4"
            onSubmit={updateEvents}
        >
            <h2 className="text-center text-blue-700 mb-4 text-2xl font-bold">Edit Event</h2>
            <label htmlFor="eventTitle" className="text-blue-700 font-medium">Title</label>
            <input
                type="text"
                id="eventTitle"
                placeholder="type in the updated event title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="p-3 border border-blue-200 rounded-md text-base bg-blue-50 focus:outline-none focus:border-blue-500"
            />
            <label htmlFor="eventDescription" className="text-blue-700 font-medium">Description</label>
            <textarea
                id="eventDescription"
                placeholder="type in the updated event description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="p-3 border border-blue-200 rounded-md text-base bg-blue-50 focus:outline-none focus:border-blue-500"
            />
            <button
                type="submit"
                className="bg-gradient-to-r from-blue-200 to-blue-600 text-white rounded-md py-3 text-lg font-semibold shadow hover:from-blue-600 hover:to-blue-200 transition"
            >
                Submit
            </button>
        </form>
            </>
    );
}
export default EditEvent