
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminLogin.module.css";
import { Link } from "react-router-dom";
function AdminLogin() {
    const navigate = useNavigate();
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:3000/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({userID, password})
                
            });
            const data = await res.json();
            if (res.ok) {
                localStorage.setItem("token", data.accessToken);
                navigate("/admin")
            }
            else {
                navigate("/error")

                setTimeout(() => { navigate("/admin") }, 3000)
            }

        }
        catch (err) {
            console.log(err.message)
        }
    }
    return (

        <form className={styles.adminLoginForm} onSubmit={handleLogin}>
            <h2 style={{ textAlign: 'center', color: '#4682b4', marginBottom: '1rem' }}>Admin Login</h2>
            <Link to="/event" style={{color: "rgba(42, 80, 110, 0.8)", fontSize: "12px"}}>Not an Admin?</Link>
            <label htmlFor="userID">Username</label>
            <input type="text" id="userID" name="userID" value={userID} onChange={e => setUserID(e.target.value)} autoComplete="username" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
            <button type="submit">Login</button>
        </form>
    )
}
export default AdminLogin