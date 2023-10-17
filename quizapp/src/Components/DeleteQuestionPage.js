import React, { Component } from "react";

class DeleteQuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           topics: [],
           selectedTopicId: "",
           questions: [],
        };
    }

    componentDidMount() {
        this.fetchAvailableTopics();
    }

    fetchAvailableTopics() {
        fetch(`/topic/getAllTopics`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({ topics: data});
        })
        .catch((error) => {
            console.error("Error Fetching topics: ",error);
        });
    }

    fetchQuestionsForTopic() {
        fetch(`/questions/getQuestionsByTopic/${this.state.selectedTopicId}`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({ questions: data });
        })
        .catch((error) => {
            console.error("Error fetching questions for the selected topic: ",error);
        });
    }

    handleTopicSelect = (event) => {
        this.setState({ selectedTopicId: event.target.value }, () => {
            this.fetchQuestionsForTopic();
        });
    }

    handleQuestionDelete = (questionId) => {
        fetch(`/admin//deleteQuestion/${questionId}` , {
            method: 'DELETE',
        })
        .then((response) => {
            if(response.status === 200) {
                const updatedQuestions = this.state.questions.filter(
                    (question) => question.questionId !== questionId
                );
                this.setState({ questions: updatedQuestions });
            } else {
                console.error("Error deleting question: ",response.status);
            }
        }).catch((error) => {
            console.error("Error deleting question: ",error);
        });
    };

    render() {
        const { topics, selectedTopicId, questions } = this.state;

        return (
            <div className="delete-question-page">
                <h2> Delete Question</h2>
                <label>
                    Select Topic: 
                    <select
                        name="selectedTopicId"
                        value={selectedTopicId}
                        onChange={this.handleTopicSelect}>
                        <option value="">Select a Topic</option>
                        {topics.map((topic) => (
                            <option key={topic.topicId} value={topic.topicId}>
                                {topic.topicName}
                            </option>
                        ))}
                    </select>
                </label>

                <table>
                    <thead>
                        <tr>
                            <th>Question Id</th>
                            <th>Question Description</th>
                            <th>Option1</th>
                            <th>Option2</th>
                            <th>Option3</th>
                            <th>Option4</th>
                            <th>Correct Answer</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question) => (
                            <tr key={question.questionId}>
                                <td>{question.questionId}</td>
                                <td>{question.questionDescription}</td>
                                <td>{question.option1}</td>
                                <td>{question.option2}</td>
                                <td>{question.option3}</td>
                                <td>{question.option4}</td>
                                <td>{question.correctAnswer}</td>
                                <td>
                                    <button onClick={() => this.handleQuestionDelete(question.questionId)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DeleteQuestionPage;