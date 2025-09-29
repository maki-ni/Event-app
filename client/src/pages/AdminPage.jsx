import { useNavigate } from "react-router-dom";

import AdminLogin from "./AdminLogin";
import { useEffect } from "react";


function AdminPage() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    useEffect(() => {
        
        if (token) {
            navigate("/admin/dashboard")            
        }
            
        
    }, [token, navigate])
    
    if (!token) {
            return <AdminLogin />            
        }
    
    
}
export default AdminPage;