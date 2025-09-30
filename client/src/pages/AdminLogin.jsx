
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Tailwind CSS used, no CSS module import
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
            className="bg-white max-w-md mx-auto mt-12 rounded-xl shadow-lg p-8 flex flex-col gap-4"
            onSubmit={handleLogin}
        >
            <h2 className="text-center text-blue-700 mb-4 text-2xl font-bold">Admin Login</h2>
            <Link to="/event" className="text-blue-900/80 text-xs text-center mb-2">Not an Admin?</Link>
            {error && <div className="text-red-700 text-sm text-center mb-2">{error}</div>}
            <label htmlFor="userID" className="text-blue-700 font-medium">Username</label>
            <input
                type="text"
                id="userID"
                name="userID"
                value={userID}
                onChange={e => setUserID(e.target.value)}
                autoComplete="username"
                className="p-3 border border-blue-200 rounded-md text-base bg-blue-50 focus:outline-none focus:border-blue-500"
            />
            <label htmlFor="password" className="text-blue-700 font-medium">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                className="p-3 border border-blue-200 rounded-md text-base bg-blue-50 focus:outline-none focus:border-blue-500"
            />
            <button
                type="submit"
                className="bg-gradient-to-r from-blue-200 to-blue-600 text-white rounded-md py-3 text-lg font-semibold shadow hover:from-blue-600 hover:to-blue-200 transition"
            >
                Login
            </button>
        </form>
    )
}
export default AdminLogin