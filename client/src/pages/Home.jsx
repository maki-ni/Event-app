
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/")
        .then(res => res.json())
    .then(data => setEvents(data))
        
    }, [])
    
    return (
        <div className={styles.eventListContainer}>
            <Link to="/admin" style={{color: "rgba(42, 80, 110, 0.8)", fontSize: "12px"}}>Are you an Admin?</Link>
            <div className={styles.eventListTitle}>Upcoming Events</div>
            <ul className={styles.eventList}>
                {events.map((event, id) => (
                    <li className={styles.eventItem} key={id}>
                        <div className={styles.eventTitle}>{event.title}</div>
                        <div className={styles.eventDetails}>{event.description}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Home;
