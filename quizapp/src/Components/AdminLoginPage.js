import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './UserSignupPage.css';

function AdminLoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        //checking username and password
        if (username === 'admin' && password === 'adminpassword') {
            navigate("/admin/dashboard");
        } else {
            //handling incorrect login
            alert("incorrect username/password entered, try again");
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Admin Login</h2>
            <form>
                <div className="form-group">
                    <input 
                        type="text"
                        placeholder="Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button type="button" onClick={handleLogin} className="btn-Adminlogin">
                    Login
                </button>
            </form>
        </div>
    )
}

export default AdminLoginPage;
