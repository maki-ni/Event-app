
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import styles from "./Home.module.css"

function AdminDashboard() {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000")
            .then(res => res.json())
        .then(data => setEvents(data))
    })
    
    return (
        <>
            <Navbar />
            <div className={StyleSheet.eventListContainer}>
                <div className={styles.eventListTitle}>Upcoming Events</div>
                <ul className={styles.eventList}>
                    {events.map((event, id) => (<li className={styles.eventItem} key={id}>
                        <div className={styles.eventTitle}>{event.title}</div>
                                                <div className={styles.eventDetails}>{event.description}</div>
                    </li>))}

                </ul>
            </div>
        </>
    )
}
export default AdminDashboard