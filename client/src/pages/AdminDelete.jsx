
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminLogin.module.css";

function AdminDelete() {
    const navigate = useNavigate();
    const [userID, setUserID] = useState("");
    
    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/admin/${userID}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
                
                
            });
            await res.json();
            if (res.ok) {
                
                navigate("/admin")
            }
            else {
                navigate("/error")
            }

        }
        catch (err) {
            console.log(err.message)
        }
    }
    return (
        <form className={styles.adminLoginForm} onSubmit={handleDelete}>
            <h2 style={{textAlign: 'center', color: '#4682b4', marginBottom: '1rem'}}>Admin Delete</h2>
            <label htmlFor="userID">Username</label>
            <input type="text" id="userID" name="userID" value={userID} onChange={e => setUserID(e.target.value)} autoComplete="username" />
            
            <button type="submit">Delete Admin</button>
        </form>
    )
}
export default AdminDelete