import React, { Component } from "react";

class DeleteTopicPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: [],
        };
    }

    componentDidMount() {
        //Fetching all the available topics
        this.fetchAvailableTopics();
    }

    //Fetching the topics
    fetchAvailableTopics() {
        fetch('/topic/getAllTopics')
        .then((response) => response.json())
        .then((data) => {
            this.setState({ topics: data});
        })
        .catch((error) => {
            console.error("Error Fetching the topics: ",error);
        });
    }

    //Deleting the topic
    handleTopicDelete = (topicId) => {
        const id = parseInt(topicId, 10);
            fetch(`/admin/deleteTopic/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        })
        .then((response) => {
            if(response.status === 200){
                //Topic is deleted successfully, 
                //Updating the state to reflect the change
                const updatedTopics =  this.state.topics.filter(
                    (topic) => topic.topicId !== topicId
                );
                this.setState({ topics: updatedTopics });
            } else {
                console.error(" Error in deleting the topic: ",response.status);
            }
        })
        .catch((error) => {
            console.error(" Error in deleting the topic: ",error);
        }); 
};

    render() {
        const { topics } = this.state;

        return (
            <div className="delete-topic-page">
                <h2> Delete Topic page</h2>
                <table>
                    <thead>
                        <tr>
                            <th> Topic Id</th>
                            <th> Topic Name</th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {topics.map((topic) => (
                            <tr key={topic.topicId}>
                                <td>{topic.topicId}</td>
                                <td>{topic.topicName}</td>
                                <td>
                                    <button onClick={() => this.handleTopicDelete(topic.topicId)}>
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

export default DeleteTopicPage;