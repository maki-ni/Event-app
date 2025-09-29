import { useState } from "react";
import styles from "./CreateEvent.module.css";
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
    return (<>
        <Navbar></Navbar>
        <form onSubmit={handleEventCreation} className={styles.createEventForm}>
            <h2 style={{textAlign: 'center', color: '#4682b4', marginBottom: '1rem'}}>Create Event</h2>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <label htmlFor="description">Description</label>
            <textarea type="text" id="description" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
            <button type="submit">Create Event</button>
        </form>
        </>
    )
}
export default CreateEvent