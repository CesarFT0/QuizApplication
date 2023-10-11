import React, { Component } from "react";

class TopicSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      selectedTopic: "",
    };
  }

  componentDidMount() {
    
    fetch("/topic/getAllTopics")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ topics: data });
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }

  handleTopicChange = (e) => {
    this.setState({ selectedTopic: e.target.value });
  };

  handleStartQuiz = () => {
    
    this.props.onStartQuiz(this.state.selectedTopic);
  };

  render() {
    const { topics, selectedTopic } = this.state;

    return (
      <div>
        <h1 style={{ color: "black" }}>Select a Topic</h1>
        <div className="form-group">
          <select
            className="form-control"
            value={selectedTopic}
            onChange={this.handleTopicChange}
          >
            <option value="">Select a Topic</option>
            {topics.map((topic) => (
              <option key={topic.topicId} value={topic.topicId}>
                {topic.topicName}
              </option>
            ))}
          </select>
        </div>
        <button
          className="btn btn-primary"
          onClick={this.handleStartQuiz}
          disabled={!selectedTopic}
        >
          Start Quiz
        </button>
      </div>
    );
  }
}

export default TopicSelector;





  
