import React,  { Component } from "react";
import "./EditQuestionPage.css";

class EditQuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],   //for storing the list of questions
        }
    };

    componentDidMount() {
        //Fetch all the questions from the backend
        this.fetchQuestions();
    }

    fetchQuestions = () => {
        fetch("/questions/allQuestions")
        .then((response) => response.json())
        .then((data) => {
            this.setState({ questions: data });
        })
        .catch((error) => {
            console.error("Error fetching questions: ",error);
        });
    };

    //Handle changes in text fields and update the data in the state
    handleFieldChange = (questionId, fieldName, value) => {
        //Find the question in the state
        const updatedQuestions = this.state.questions.map((question) => {
            if(question.questionId === questionId) {
                //Update the specific field
                return { ...question, [fieldName]: value};
            }
            return question;
        });

        //update the state
        this.setState({ questions: updatedQuestions });
    };

    //Handle for submission (update the question in the database)
    handleSubmit = (questionId) => {
        const updatedQuestion = this.state.questions.find(
            (question) => question.questionId === questionId
        );

    //Send the updated question data to your API to save changes
    fetch("/admin/editQuestion", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(updatedQuestion),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Question updated: ", data);
    })
    .catch((error) => {
        console.error("Error updating questions: ",error);
    });
    };

    render() {
        const { questions } = this.state;

        return (
            <div>
                <h2>
                </h2>
                <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Question Id</th>
                            <th>Question Description</th>
                            <th>Option 1</th>
                            <th>Option 2</th>
                            <th>Option 3</th>
                            <th>Option 4</th>
                            <th>Correct Answer</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question) => (
                            <tr key={question.questionId}>
                                <td>{question.questionId}</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={question.questionDescription}
                                        onChange={(e) => 
                                        this.handleFieldChange(
                                            question.questionId,
                                            "questionDescription",
                                            e.target.value
                                        )
                                    }
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        value={question.option1}
                                        onChange={(e) => 
                                        this.handleFieldChange(
                                            question.questionId,
                                            "option1",
                                            e.target.value
                                        )
                                    }
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        value={question.option2}
                                        onChange={(e) => 
                                        this.handleFieldChange(
                                            question.questionId,
                                            "option2",
                                            e.target.value
                                        )
                                    }
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        value={question.option3}
                                        onChange={(e) => 
                                        this.handleFieldChange(
                                            question.questionId,
                                            "option3",
                                            e.target.value
                                        )
                                    }
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        value={question.option4}
                                        onChange={(e) => 
                                        this.handleFieldChange(
                                            question.questionId,
                                            "option4",
                                            e.target.value
                                        )
                                    }
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        value={question.correctAnswer}
                                        onChange={(e) => 
                                        this.handleFieldChange(
                                            question.questionId,
                                            "correctAnswer",
                                            e.target.value
                                        )
                                    }
                                    />
                                </td>
                                <td>
                                    <button
                                    type="button"
                                    onClick={() => this.handleSubmit(question.questionId)}
                                    >
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}
export default EditQuestionPage;