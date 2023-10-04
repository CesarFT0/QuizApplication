import React, { Component } from "react";

class DeletQuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionId: "",
            topicId: "",
            questionDescription: "",
            errorMessage: "",
        }
    };

    //Handling the form input changes
    handleInputChanges = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value});
    };

    //Handling the form submission and validations

    handleSubmit = (e) => {
        e.preventDefault();

        //Validate the inputs
        if(!this.state.questionId || this.state.topicId || this.state.questionDescription) {
            this.setState({ errorMessage: "All fields are required "});
            return;
        }

        //clearing the previous error messages
        this.setState({ errorMessage: ""});

        //API calls for deleting after checking whether the question is even present or not

    };

    render() {
        return (
            <div>
                <h2> Delete Question </h2>
                <form onSubmit={this.handleSubmit}>
                    {this.state.errorMessage && (
                        <div className="alert alert-danger"> {this.state.errorMessage} </div>
                    )}
                <div className="form-group">
                    <label>Question Id</label>
                <input
                            type="text"
                            name="questionId"
                            value={this.state.questionId}
                            onChange={this.handleInputChange}
                            className="form-control"
                            required
                        />
                </div>
                <div className="form-group">
                        <label>Topic ID</label>
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
                        <label>Question Description</label>
                        <input
                            type="text"
                            name="questionDescription"
                            value={this.state.questionDescription}
                            onChange={this.handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-danger"> Delete Question </button>
                </form>
            </div>
        );
    }
}

export default DeletQuestionPage;