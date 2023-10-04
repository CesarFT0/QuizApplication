
import React, { Component } from 'react';
import '../App.css'
 
const getRandomNumber = () => {
    return Math.floor(Math.random() * 11);
}

class Score extends Component {
    render() {
        const { score, onNextQuestion } = this.props;
        const randomScore = getRandomNumber();
        return (
            <div>
                <h2>Results</h2>
                <h4>Your score: </h4>
                {onNextQuestion}
                <h4>{score}{randomScore}</h4>
            </div>
        );
    }
}
 
export default Score;