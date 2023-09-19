import React, { Component } from "react";
import Options from "./Option";

const firstQuestionId = 0;

class Question extends Component {
  render() {
    const { question, selectedOption, onOptionChange, onSubmit } = this.props;

    const questionNumber = question.id + firstQuestionId; 

    return (
      <div className="">
        <h3>Question {questionNumber}</h3>
        <h5 className="mt-2">{question.question}</h5> {/* Display the provided question text */}
        <form onSubmit={onSubmit} className="mt-2 mb-2">
          <Options
            options={question.options}
            selectedOption={selectedOption}
            onOptionChange={onOptionChange}
          />
          <button type="submit" className="btn btn-primary mt-2">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default Question;
