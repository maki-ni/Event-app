
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FormBase from "../components/FormBase";

function AdminDelete() {
    const navigate = useNavigate();
    const [userID, setUserID] = useState("");
    const fields = [
        { label: "Username", name: "userID", type: "text", value: userID, onChange: e=> setUserID(e.target.value), id: "userID", autoComplete: "off" ,required: true }
        
        
    ]
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
            <FormBase title="Admin Delete" fields={fields} test="" redirectLocation="" error=""  onSubmit={handleDelete} buttonText="Remove" />
        
            </>
    )
}
export default AdminDelete