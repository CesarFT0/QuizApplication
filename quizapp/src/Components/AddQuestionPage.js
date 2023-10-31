import React, { Component } from "react";
import './AddQuestionPage.css';

class AddQuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            selectedTopicId: "",
            questionId: "",
            questionDescription: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            correctAnswer: "",
            successMessage: null,
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
            console.error("Error Fetching topics: ", error);
        });
    }

    //Fetch the maximum question Id for the selected Topic
    fetchMaxQuestionIdForTopic() {
        //fetch(`/questions/getQuestionsByTopic/${this.state.selectedTopicId}`)
        fetch(`/questions/allQuestions`)
        .then((response) => response.json())
        .then((data) => {
            //Find the maximum question Id from the fetched questions
            const maxQuestionId = Math.max(...data.map((question) => question.questionId));
            //Set the next Question Id (one more than the maximum)
            this.setState({ questionId: maxQuestionId + 1});
        })
        .catch((error) => {
            console.error("Error fetching questions for the selected Topic: ", error);
        });
    }


    //Handle the form field changes
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    //Handle the topic selection in the drop-down
    handleTopicSelect = (event) => {
        const selectedTopicId = event.target.value;
        this.setState({ selectedTopicId }, () => {
            //fetch the maximum question Id
            this.fetchMaxQuestionIdForTopic();
        });
    } 


    //Handle the form submission
    handleSubmit = (event) => {
        event.preventDefault();

        console.log("topic id: ",this.state.selectedTopicId);

        if(!this.state.selectedTopicId) {
            console.error("Selected Topic Id is required");
            return;
        }
        //create a new question object
        const newQuestion = {
            topicId: this.state.selectedTopicId,
            questionId: this.state.questionId,
            questionDescription: this.state.questionDescription,
            option1: this.state.option1,
            option2: this.state.option2,
            option3: this.state.option3,
            option4: this.state.option4,
            correctAnswer: this.state.correctAnswer,
        };
        console.log("topic id: ",this.state.selectedTopicId);
        console.log("question id: ",this.state.questionId);
        fetch(`/admin/addQuestion`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newQuestion),
        })
        .then((response) => {
            if (response.status === 200) {
                console.log("Question Added Successfully");

                //Reset the form fields
                this.setState({
                    selectedTopicId: "",
                    questionId: "",
                    questionDescription: "",
                    option1: "",
                    option2: "",
                    option3: "",
                    option4: "",
                    correctAnswer: "",
                    successMessage: "Question Added Successfully",
                })
            } else {
                console.error("Error adding question", response.status);
            }
        })
        .catch((error) => {
            console.error("Error adding questions", error);
        });
    };

    render() {
        const { topics, successMessage } = this.state;
        return (
            <div className="add-question-page">
                <h2> Add New Question </h2>
                <form onSubmit={this.handleSubmit}>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <label>
                        Select Topic: 
                        <select
                            name="selectedTopicId"
                            value={this.state.selectedTopicId}
                            onChange={this.handleTopicSelect}
                        >
                        <option value=""> Select a Topic</option>
                        {topics.map((topic => (
                            <option key={topic.topicId} value={topic.topicId}>
                                {topic.topicName}
                            </option>
                        )))}
                        </select>
                    </label>
                    <br></br>

                    <label>
                        Question Description: 
                        <input
                            type="text"
                            name="questionDescription"
                            value={this.state.questionDescription}
                            onChange={this.handleInputChange}
                            required
                        >
                        </input>
                    </label>
                    <br></br>
                    <label>
                        Option1: 
                        <input
                            type="text"
                            name="option1"
                            value={this.state.option1}
                            onChange={this.handleInputChange}
                            required
                        >
                        </input>
                    </label>
                    
                    <br></br>
                    <label>
                        Option2: 
                        <input
                            type="text"
                            name="option2"
                            value={this.state.option2}
                            onChange={this.handleInputChange}
                            required
                        >
                        </input>
                    </label>

                    <br></br>
                    <label>
                        Option3: 
                        <input
                            type="text"
                            name="option3"
                            value={this.state.option3}
                            onChange={this.handleInputChange}
                            required
                        >
                        </input>
                    </label>

                    <br></br>
                    <label>
                        Option4: 
                        <input
                            type="text"
                            name="option4"
                            value={this.state.option4}
                            onChange={this.handleInputChange}
                            required
                        >
                        </input>
                    </label>

                    <br></br>
                    <label>
                        correctAnswer: 
                        <input
                            type="text"
                            name="correctAnswer"
                            value={this.state.correctAnswer}
                            onChange={this.handleInputChange}
                            required
                        >
                        </input>
                    </label>
                    <br></br>
                    <button className="add" type="submit">
                        Add Question
                    </button>
                </form>
            </div>
        )
    }
};

export default AddQuestionPage;
