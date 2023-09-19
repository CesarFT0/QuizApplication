import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import Score from "./Components/Score";
import TopicSelector from "./Components/TopicSelector";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
      selectedTopic: null,
    };
  }

  componentDidMount() {
    
    fetch("/questions/getQuestionsByTopic/1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ questionBank: data });
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.checkAnswer();
    this.handleNextQuestion();
  };

  checkAnswer = () => {
    const { questionBank, currentQuestion, selectedOption, score } = this.state;
    const currentQuestionData = questionBank[currentQuestion];

    if (currentQuestionData && selectedOption === currentQuestionData.correctAnswer) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }
  };

  handleNextQuestion = () => {
    const { questionBank, currentQuestion } = this.state;
    if (currentQuestion + 1 < questionBank.length) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        selectedOption: "",
      }));
    } else {
      this.setState({
        quizEnd: true,
      });
    }
  };

  handleStartQuiz = (topicId) => {
    
    fetch(`/questions/getQuestionsByTopic/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          questionBank: data,
          selectedTopic: topicId,
          currentQuestion: 0,
          selectedOption: "",
          score: 0,
          quizEnd: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  };

  render() {
    const {
      questionBank,
      currentQuestion,
      selectedOption,
      score,
      quizEnd,
      selectedTopic,
    } = this.state;
    const currentQuestionData = questionBank[currentQuestion];

    return (
      <div className="App d-flex flex-column align-items-center justify-content-center">
        <h1 className="app-title">QUIZ APP</h1>
        {!selectedTopic ? (
          <TopicSelector onStartQuiz={this.handleStartQuiz} />
        ) : (
          !quizEnd && currentQuestionData ? (
            <Question
              question={{
                id: currentQuestion + 1, 
                question: currentQuestionData.questionDescription, 
                options: [
                  currentQuestionData.option1,
                  currentQuestionData.option2,
                  currentQuestionData.option3,
                  currentQuestionData.option4,
                ],
                answer: currentQuestionData.correctAnswer,
              }}
              selectedOption={selectedOption}
              onOptionChange={this.handleOptionChange}
              onSubmit={this.handleFormSubmit}
              firstQuestionId={0} 
            />
          ) : (
            <Score score={score} onNextQuestion={this.handleNextQuestion} />
          )
        )}
      </div>
    );
  }
}

export default App;
