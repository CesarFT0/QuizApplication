import React from "react";
import { Link } from "react-router-dom";

function AdminDashBoard() {
        return (
            <div>
                <h2>
                    Admin DashBoard
                </h2>
                <form>
                <Link to="/admin/add-question">
                    <button type="button" className="btn btn-primary"> Add Question </button>
                </Link>
                <Link to="/admin/edit-question">
                    <button type="button" className="btn btn-primary"> Edit Question </button>
                </Link>
                <Link to="/admin/delete-question">
                    <button type="button" className="btn btn-primary">Delete Question</button>
                </Link>
                <Link to="/admin/add-topic">
                    <button type="button" className="btn btn-primary">Add Topic</button>
                </Link>
                <Link to="/admin/delete-topic">
                    <button type="button" className="btn btn-primary">Delete Topic</button>
                </Link>
                </form>
            </div>
        );
}

export default AdminDashBoard;