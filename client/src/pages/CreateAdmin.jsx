import { useState } from "react";
import styles from "./CreateEvent.module.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";


function CreateAdmin() {
    const navigate = useNavigate();
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    async function handleAdminCreation(e) {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:3000/admin/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
                body: JSON.stringify({ userID, password })
            })
            res.json();
            if (res.ok) {
            navigate("/admin");
                
            }
            else {
                
                setError("Something is wrong with the userID. it probably pre exists")
                setTimeout(() => {
                    navigate("/admin")
                }, 3000)
                
            }

            
        }
        catch (err) {
            console.log(err.message)
        }
        
    }
    return (
        <> 
            <Navbar></Navbar>
        <form onSubmit={handleAdminCreation} className={styles.createEventForm}>
            <h2 style={{textAlign: 'center', color: '#4682b4', marginBottom: '1rem'}}>Create Admin</h2>
                {error && <h2 style={{ textAlign: 'center', color: '#b63636ff', marginBottom: '1rem' }}>{error}</h2>}
                <label htmlFor="userID">New userID</label>
            <input type="text" id="userID" name="userID" value={userID} onChange={(e)=>setUserID(e.target.value)} />
            <label htmlFor="password">New Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">Create Admin</button>
            </form>
            </>
    )
}
export default CreateAdmin