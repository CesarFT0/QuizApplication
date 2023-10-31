import React from "react";
import { Link } from "react-router-dom";
// import './AdminDashBoardStyling.css'
function AdminDashBoard() {
        return (
            <div className="form-container">
                <h2 className="form-title">Admin Dashboard</h2>

                <form className="adminform">
                
                     
                <Link to="/admin/add-question">
                    <button type="button" className="btn btn-primary"> Add Question </button>
                </Link>
                <br></br>
                <br></br>
                
                <Link to="/admin/edit-question">
                    <button type="button" className="btn btn-primary"> Edit Question </button>
                </Link>
                <br></br>
                <br></br>
                
                <Link to="/admin/delete-question">
                    <button type="button" className="btn btn-primary">Delete Question</button>
                </Link>
                <br></br>
                <br></br>
                
                <Link to="/admin/add-topic">
                    <button type="button" className="btn btn-primary">Add Topic</button>
                </Link>
                <br></br>
                <br></br>
                
                <Link to="/admin/delete-topic">
                    <button type="button" className="btn btn-primary">Delete Topic</button>
                </Link>
                <br></br>
                <br></br>
                
                </form>
            </div>
        );
}

export default AdminDashBoard;