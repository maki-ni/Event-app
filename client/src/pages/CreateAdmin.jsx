import { useState } from "react";

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import FormBase from "../components/FormBase";

function CreateAdmin() {
    const navigate = useNavigate();
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const fields = [
        { label: "Username", name: "userID", type: "text", value: userID, onChange: e=> setUserID(e.target.value), id: "userID", autoComplete: "off",required: true },
        {label: "New Password", name: "password", type: "password",id: "password" ,value: password, onChange: e=> setPassword(e.target.value),autoComplete: "password", required: true}
        
    ]
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
            <FormBase title="Create Admin" fields={fields} test="" redirectLocation="/admin" error={error}  onSubmit={handleAdminCreation} buttonText="Create Admin" />
            
            </>
    )
}
export default CreateAdmin