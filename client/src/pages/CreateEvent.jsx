import { useState } from "react";
// Tailwind CSS used, no CSS module import
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    async function handleEventCreation(e) {
        e.preventDefault();
        try {
            await fetch("http://localhost:3000/event/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
                body: JSON.stringify({ title, description })
        })
            navigate("/admin");
            
        }
        catch (err) {
            console.log(err.message)
        }
        
    }
    return (
        <>
            <Navbar />
            <form
                onSubmit={handleEventCreation}
                className="bg-white max-w-md mx-auto mt-12 rounded-xl shadow-lg p-8 flex flex-col gap-4"
            >
                <h2 className="text-center text-blue-700 mb-4 text-2xl font-bold">Create Event</h2>
                <label htmlFor="title" className="text-blue-700 font-medium">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="p-3 border border-blue-200 rounded-md text-base bg-blue-50 focus:outline-none focus:border-blue-500"
                />
                <label htmlFor="description" className="text-blue-700 font-medium">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    className="p-3 border border-blue-200 rounded-md text-base bg-blue-50 focus:outline-none focus:border-blue-500"
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-200 to-blue-600 text-white rounded-md py-3 text-lg font-semibold shadow hover:from-blue-600 hover:to-blue-200 transition"
                >
                    Create
                </button>
            </form>
        </>
    )
}
export default CreateEvent