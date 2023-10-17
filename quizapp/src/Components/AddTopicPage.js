import React, { Component } from "react";

class AddTopicPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            topicName: "",
            successMessage: "",
            errorMessage: "",
        };
    }

    componentDidMount() {
        //Fetch all the topics
        this.fetchAvailableTopics();
    }

    fetchAvailableTopics() {
        fetch(`/topic/getAllTopics`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({ topics:data });
            //Find the maximum topic
            const maxTopicId = Math.max(...data.map((topic) => topic.topicId));
            //calculate the new TopicId as one more than the maximum
            this.setState( {topicId: maxTopicId + 1 });
        })
        .catch((error) => {
            console.error("Error Fetching topics: ",error);
        });
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const newTopic = {
            topicId: this.state.topicId,
            topicName: this.state.topicName,
        };

        fetch(`/admin/addTopic`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTopic),
        })
        .then((response) => {
            if(response.status === 200) {
                //Topic added successfully, set success message
                this.setState({ successMessage: "Topic added successfully!", errorMessage: ""});
                //Clear the fields
                this.setState({ topicName: ""});
                //Redirect to the add new question page
                this.props.history.push("/add-question");
            } else {
                //console.error("Error adding new topic:", response.status);
                this.setState({ successMessage: "", errorMessage:" Something went wrong, topic not added "});
            }
        }).catch((error) => {
            //console.error("Error adding new topic:", error);
            this.setState({ successMessage: "", errorMessage:" Something went wrong, topic not added "});
        });
    }

    render() {
        return (
            <div className="add-topic-page">
                <h2>
                    Add New Topic
                </h2>
                <form onSubmit={this.handleSubmit}>
                    {/* <label>
                        Topic Id
                        <input 
                            type="text"
                            name="topicId"
                            value={this.state.topicId}
                            readOnly
                        >
                        </input>
                    </label>
                    <br>
                    </br> */}

                    <label>
                        Topic Name
                        <input 
                            type="text"
                            name="topicName"
                            value={this.state.topicName}
                            onChange={this.handleInputChange}
                            required
                        >
                        </input>
                    </label>
                    <br>
                    </br>
                    <button type="submit">
                        Add Topic
                    </button>
                </form>
            </div>
        );
    }
}

export default AddTopicPage;