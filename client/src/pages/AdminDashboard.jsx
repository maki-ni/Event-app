
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import styles from "./Home.module.css"
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
            <div className={StyleSheet.eventListContainer}>
                <div className={styles.eventListTitle}>Upcoming Events</div>
                <ul className={styles.eventList}>
                    {events.map((event, id) => (<li className={styles.eventItem} key={id}>
                        <div className={styles.eventTitle}>{event.title}</div>
                        <div className={styles.eventDetails}>{event.description}</div>
                        <button onClick={() => {
                            navigate(`/event/edit/${event._id}`);
                        }}>Edit</button>
                        <button onClick={() => {
                            deleteEvent(event._id)
                        }}>Delete</button>
                    </li>))}

                </ul>
            </div>
        </>
    )
}
export default AdminDashboard