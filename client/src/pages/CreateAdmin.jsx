import { useState } from "react";
// Tailwind CSS used, no CSS module import
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
            <form
                onSubmit={handleAdminCreation}
                className="bg-white max-w-md mx-auto mt-12 rounded-xl shadow-lg p-8 flex flex-col gap-4"
            >
                <h2 className="text-center text-blue-700 mb-4 text-2xl font-bold">Create Admin</h2>
                {error && <div className="text-red-700 text-sm text-center mb-2">{error}</div>}
                <label htmlFor="userID" className="text-blue-700 font-medium">New userID</label>
                <input
                    type="text"
                    id="userID"
                    name="userID"
                    value={userID}
                    onChange={e => setUserID(e.target.value)}
                    className="p-3 border border-blue-200 rounded-md text-base bg-blue-50 focus:outline-none focus:border-blue-500"
                />
                <label htmlFor="password" className="text-blue-700 font-medium">New Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="p-3 border border-blue-200 rounded-md text-base bg-blue-50 focus:outline-none focus:border-blue-500"
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-200 to-blue-600 text-white rounded-md py-3 text-lg font-semibold shadow hover:from-blue-600 hover:to-blue-200 transition"
                >
                    Create Admin
                </button>
            </form>
            </>
    )
}
export default CreateAdmin