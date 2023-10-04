import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <div>
            <h2> admin login </h2>
            <form>
                <div classname="form-group">
                    <label>
                        username
                    </label>
                    <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        classname="form-control"
                    />
                </div>
                <div className="form-group">
                <label>
                        password
                    </label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        classname="form-control"
                    />
                </div>
                <button type="button" onClick={handleLogin} className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    )
}

export default AdminLoginPage;