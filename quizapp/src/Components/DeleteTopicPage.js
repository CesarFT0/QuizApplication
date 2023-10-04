import React, { Component } from "react";

class DeleteTopicPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topicId: "",
            topicName: "",
            errorMessage: "",
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value});
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if(!this.state.topicId || !this.state.topicName) {
            this.setState({ errorMessage: "All Fields are required"});
            return;
        }

        this.setState({ errorMessage: ""});
    };

    render() {
        return (
            <div>
                <h2> Delete Topic</h2>
                <form onSubmit={this.handleSubmit}>
                    {this.state.errorMessage && (
                        <div className="alert alert-danger">{this.state.errorMessage}</div>
                    )}
                    <div className="form-group">
                        <label> Topic Id</label>
                        <input
                            type="text"
                            name="topicId"
                            value={this.state.topicId}
                            onChange={this.handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label> Topic Name</label>
                        <input 
                            type="text"
                            name="topicName"
                            value={this.state.topicName}
                            onChange={this.handleInputChange}
                            className="form-control"
                            required    
                        >
                        </input>
                        <button type="submit" className="btn btn-danger">Delete Topic</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default DeleteTopicPage;