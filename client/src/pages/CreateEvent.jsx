import { useState } from "react";

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import FormBase from "../components/FormBase";
function CreateEvent() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const fields = [
        { label: "Event Title", name: "title", type: "text", value: title, onChange: e=> setTitle(e.target.value), id: "title", autoComplete: "off", required: true },
        { label: "Event Description", name: "description", type: "text", value: description, onChange: e=> setDescription(e.target.value), id: "description",autoComplete: "off",  required: true }
        
    ]
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
            <FormBase title="Create Event" fields={fields} test="" redirectLocation="/admin" error=""  onSubmit={handleEventCreation} buttonText="Create Event" />
            {/* <form
                onSubmit={handleEventCreation}
                className="form-base"
            >
                <h2 className="form-h2">Create Event</h2>
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="form-input"
                />
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    className="form-input"
                />
                <button
                    type="submit"
                    className="form-button"
                >
                    Create
                </button>
            </form> */}
        </>
    )
}
export default CreateEvent