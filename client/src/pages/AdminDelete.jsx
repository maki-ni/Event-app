
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Tailwind CSS used, no CSS module import

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
        <form
            className="bg-white max-w-md mx-auto mt-12 rounded-xl shadow-lg p-8 flex flex-col gap-4"
            onSubmit={handleDelete}
        >
            <h2 className="text-center text-blue-700 mb-4 text-2xl font-bold">Admin Delete</h2>
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
            <button
                type="submit"
                className="bg-gradient-to-r from-red-200 to-red-600 text-white rounded-md py-3 text-lg font-semibold shadow hover:from-red-600 hover:to-red-200 transition"
            >
                Delete Admin
            </button>
        </form>
    )
}
export default AdminDelete