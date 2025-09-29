import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditEvent.module.css";

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
        <form className={styles.editEventForm} onSubmit={updateEvents}>
            <h2 style={{textAlign: 'center', color: '#4682b4', marginBottom: '1rem'}}>Edit Event</h2>
            <label htmlFor="eventTitle">Title</label>
            <input type="text" id="eventTitle" placeholder="type in the updated event title" value={title} onChange={e => setTitle(e.target.value)} />
            <label htmlFor="eventDescription">Description</label>
            <textarea id="eventDescription" placeholder="type in the updated event description" value={description} onChange={e => setDescription(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}
export default EditEvent