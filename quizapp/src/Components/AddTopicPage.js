import React, { Component } from "react";

class AddTopicPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topicId: "",
            topicName: "",
        }
    };

    //for handling the form input changes, we have
    handleInputChange =(e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value});
    };

    //handling the submission of form
    handleSubmit = (e) => {
        e.preventDefault();

        //check if the entered topicId is correct or not
        const invalidTopicIds = [1,2,3,4];
        if (invalidTopicIds.includes(Number(this.state.topicId))) {
            this.setState({ errorMessage: "Topic Id already present"});
            return;
        }

        //clearing any previous error messages
        this.setState({ errorMessage : ""});

        //add the code for generating the sql query and sending it to the API
    };

    render() {
        return (
            <div>
                <h2> Add a Topic </h2>
                <form onSubmit={this.handleSubmit}>
                    {this.state.errorMessage && (
                        <div className="alert alert-danger">{this.state.errorMessage}</div>
                    )}
                    <div className="form-group">
                        <label> Topic ID </label>
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
                        <label> Topic name </label>
                        <input
                            type="text"
                            name="topicName"
                            value={this.state.topicName}
                            onChange={this.handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary"> Add Topic </button>
                </form>
            </div>
        );
    }
}

export default AddTopicPage;