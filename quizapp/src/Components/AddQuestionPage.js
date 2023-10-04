import React, { Component } from "react";

class AddQuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionId: "",
            topicId: "",
            question_description: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            correct_answer: ""
        };
    }

    //Hanlde the form input and changes
    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    //Handle the form submission
    handleSubmit = (e) => {
        e.preventDefault();
        //Add a validation for the topicId
        if(![1,2,3,4].includes(Number(this.state.topicId))) {
            alert("Invalid Topic Id entered");
            return;
        }
            //Add the logic for constructing the sql insert query here
    };

    render() {
        return (
            <div>
                <h2>Add New Question </h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label> Question ID</label>
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
                            name="question_description"
                            value={this.state.question_description}
                            onChange={this.handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Option 1</label>
                        <input
                            type="text"
                            name="option1"
                            value={this.state.option1}
                            onChange={this.handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Option 2</label>
                        <input
                            type="text"
                            name="option2"
                            value={this.state.option2}
                            onChange={this.handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Option 3</label>
                        <input
                            type="text"
                            name="option3"
                            value={this.state.option3}
                            onChange={this.handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Option 4</label>
                        <input
                            type="text"
                            name="option4"
                            value={this.state.option4}
                            onChange={this.handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Correct Answer</label>
                        <input
                            type="text"
                            name="correct_answer"
                            value={this.state.correct_answer}
                            onChange={this.handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add Question
                    </button>
                </form>
            </div>
        )
    }
};

export default AddQuestionPage;
