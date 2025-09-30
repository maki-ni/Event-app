
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
function AdminLogin() {
    const navigate = useNavigate();
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
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
                
                setError("You have invalid Credentials")
                setTimeout(() => { setError("") }, 3000)
            }

        }
        catch (err) {
            console.log(err.message)
        }
    }
    return (

        <form
            className="form-base"
            onSubmit={handleLogin}
        >
            <h2 className="form-h2">Admin Login</h2>
            <Link to="/event" className="text-blue-900/80 text-xs text-center mb-2">Not an Admin?</Link>
            {error && <div className="text-red-700 text-sm text-center mb-2">{error}</div>}
            <label htmlFor="userID" className="form-label">Username</label>
            <input
                type="text"
                id="userID"
                name="userID"
                value={userID}
                onChange={e => setUserID(e.target.value)}
                autoComplete="username"
                className="form-input"
            />
            <label htmlFor="password" className="form-label">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                className="form-input"
            />
            <button
                type="submit"
                className="form-button"
            >
                Login
            </button>
        </form>
    )
}
export default AdminLogin