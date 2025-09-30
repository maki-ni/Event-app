
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormBase from "../components/FormBase";
import { Link } from "react-router-dom";
function AdminLogin() {
    const navigate = useNavigate();
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    //list of fields
    const fields = [
        { label: "Username", name: "userID", type: "text", value: userID, onChange: e=> setUserID(e.target.value), id: "userID", autoComplete: "off", required: true },
        {label: "Password", name: "password", type: "password",id: "password" ,value: password, onChange: e=> setPassword(e.target.value),autoComplete: "password",  required: true}
        
    ]
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
        <>
            <FormBase title="Admin Login" fields={fields} test="Not an Admin?" redirectLocation="/event" error={error}  onSubmit={handleLogin} buttonText="Login" />
            
        
            </>
    )
}
export default AdminLogin