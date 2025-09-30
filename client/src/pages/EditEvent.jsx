import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormBase from "../components/FormBase";
import Navbar from "../components/Navbar";

function EditEvent() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const fields = [
        { label: "Event Title", name: "title", type: "text", value: title, onChange: e=> setTitle(e.target.value), id: "title",autoComplete: "off", required: true },
        { label: "Event Description", name: "description", type: "text", value: description, onChange: e=> setDescription(e.target.value), id: "description",autoComplete: "off", required: true }
        
    ]
    const navigate = useNavigate();
    const updateEvents = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/event/${id}`, 
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                    
                },
                body: JSON.stringify({title, description})
                    
                
            }
        )
        navigate("/admin");
    }
    
    return (
        <>
            <Navbar></Navbar>
            <FormBase title="Edit Event" fields={fields} test="" redirectLocation="" error=""  onSubmit={updateEvents} buttonText="Edit Event" />
        
            </>
    );
}
export default EditEvent