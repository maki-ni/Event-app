import { useState } from "react";

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
                className="form-base"
            >
                <h2 className="form-h2">Create Admin</h2>
                {error && <div className="text-red-700 text-sm text-center mb-2">{error}</div>}
                <label htmlFor="userID" className="form-label">New userID</label>
                <input
                    type="text"
                    id="userID"
                    name="userID"
                    value={userID}
                    onChange={e => setUserID(e.target.value)}
                    className="form-input"
                />
                <label htmlFor="password" className="form-label">New Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="form-input"
                />
                <button
                    type="submit"
                    className="form-button"
                >
                    Create Admin
                </button>
            </form>
            </>
    )
}
export default CreateAdmin