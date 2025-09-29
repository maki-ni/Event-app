
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import CreateEvent from "../pages/CreateEvent";

function Navbar() {
    const navigate = useNavigate();
    // const handleCreation = () => {
    //     navigate('/event/create')
        
    // }
    const handleLogout = () => {
        const token = localStorage.getItem("token");
        if (token) {
            localStorage.removeItem("token");
            navigate('/')
        }
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.logo} id="logo">Event Admin</div>
            <div>
                <ul className={styles.ul}>
                    <li className={styles.li}><Link to="/event/create">Create an Event</Link></li>
                    <li className={styles.li}><Link to="/admin/create">Create a new Admin</Link></li>
                    <li className={styles.li}>Delete an Admin</li>
                    <li className={styles.li}>
                        <button className={styles.button} onClick={handleLogout}>Log Out</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;