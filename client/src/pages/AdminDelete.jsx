
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


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
        <>
            <Navbar></Navbar>
        <form
            className="form-base"
            onSubmit={handleDelete}
        >
            <h2 className="form-h2">Admin Delete</h2>
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
            <button
                type="submit"
                className="form-button-delete"
            >
                Delete Admin
            </button>
            </form>
            </>
    )
}
export default AdminDelete