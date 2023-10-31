import React,{ Component } from "react";

class NewAddQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
           questions: [],
           selectedQuestion: null,
        }
    };

    componentDidMount() {
        fetch("/questions/allQuestions")
        .then((response) => response.json())
        .then((data) => {
            this.setState({questions : data});
        })
        .catch((error) => {
            console.error("Error fetching questions: ", error);
        });
    }

    handleQuestionSelection = (question) => {
        this.setState({ selectedQuestion: question});
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            selectedQuestion: {
                ...prevState.selectedQuestion,
            [name]: value,
            },
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const{ selectedQuestion } = this.state;
        this.setState({ selectedQuestion: null});
    };

    render() {
        const { questions, selectedQuestion }= this.state;

        return (
            <div>
                <h2>
                    Add/Edit Question
                </h2>
                <div className="question-list">
                    <ul>
                        {questions.map((question) => (
                            <li key={question.questionId}>
                                <button
                                    onClick={ () => this.handleQuestionSelection(question)}
                                    className="btn btn-link"
                                >
                                    {question.questionDescription}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {selectedQuestion && (
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label> Question Id </label>
                            <input
                                type = "text"
                                name = "questionId"
                                value = {selectedQuestion.questionId}
                                onChange={this.handleInputChange}
                                className="form-control"
                            >
                            </input>

                            <label> Topic Id </label>
                            <input
                                type = "text"
                                name = "topicId"
                                value = {selectedQuestion.topicId}
                                onChange={this.handleInputChange}
                                className="form-control"
                            >
                            </input>

                            <label> Question Description </label>
                            <input
                                type = "text"
                                name = "questionDescription"
                                value = {selectedQuestion.questionDescription}
                                onChange={this.handleInputChange}
                                className="form-control"
                            >
                            </input>

                            <label> option 1 </label>
                            <input
                                type = "text"
                                name = "option1"
                                value = {selectedQuestion.option1}
                                onChange={this.handleInputChange}
                                className="form-control"
                            >
                            </input>

                            <label> option2 </label>
                            <input
                                type = "text"
                                name = "option2"
                                value = {selectedQuestion.option2}
                                onChange={this.handleInputChange}
                                className="form-control"
                            >
                            </input>

                            <label> option3 </label>
                            <input
                                type = "text"
                                name = "option3"
                                value = {selectedQuestion.option3}
                                onChange={this.handleInputChange}
                                className="form-control"
                            >
                            </input>

                            <label> option4 </label>
                            <input
                                type = "text"
                                name = "option4"
                                value = {selectedQuestion.option4}
                                onChange={this.handleInputChange}
                                className="form-control"
                            >
                            </input>

                            <label> correct Answer </label>
                            <input
                                type = "text"
                                name = "correctAnswer"
                                value = {selectedQuestion.correctAnswer}
                                onChange={this.handleInputChange}
                                className="form-control"
                            >
                            </input>
                        </div>
                    </form>
                )}
            </div>
        );
    }
}

export default NewAddQuestion;