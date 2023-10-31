import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopicSelectorEditing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            selectedTopic: ""
        };
    }

    componentDidMount() {
        this.fetchAvailableTopics();
    }

    fetchAvailableTopics() {
        fetch("/topic/getAllTopics")
        .then((response) => response.json())
        .then((data) => {
            this.setState({ topics: data });
        })
        .catch((error) => {
            console.error("Error fetching topics: ",error);
        });
    }
    
    handleTopicSelection = (event) => {
        const selectedTopic = event.target.value;
        this.setState({ selectedTopic });
    };

    render() {
        const { topics, selectedTopic } = this.state;

        return ( 
            <div className="topic-selctor-editing">
                <h2>
                </h2>
                <div className="topic-dropdown">
                    <label>
                        Select a Topic: 
                    </label>
                    <select value={selectedTopic} onChange={this.handleTopicSelection}>
                        <option value="">Select a Topic</option>
                        {topics.map((topic) => (
                            <option key={topic.id} value={topic.id}>
                                {topic.name}
                            </option>
                        ))}
                    </select>
                    {selectedTopic && (
                        <Link to={'edit/${selectedTopic}'}>
                            <button> Go to Question Editor</button>
                        </Link>
                    )}
                </div>
            </div>
        );
    }
}

export default TopicSelectorEditing;