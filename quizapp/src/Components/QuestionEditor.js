// import React, { Component } from "react";

// class QuestionEditor extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             questions: [],
//         };
//     }

//     fetchQuestionsForTopic(selectedTopic) {
//         fetch('/questions/getQuestionsByTopic?topicId=${selectedTopic}')
//         .then((response) => response.json())
//         .then((data) => {
//             this.setState({ questions: data});
//         })
//         .catch((error) => {
//             console.error("Error Fetching questions",error);
//         });
//     }
    
//     handleQuestionUpdate = (questionId, updatedData) => {
//         const updatedQuestions = this.state.questions.map((question) => {
//             if(question.questionId === questionId) {
//                 return {
//                     ...question,
//                     ...updatedData,
//                 };
//             }
//             return question;
//         });

//         this.setState( { questions: updatedQuestions });

//         fetch("/admin/editQuestion", {
//             method: 'PUT',
//             headers: {
//                 'Content-Type' : 'application/json',
//             },
//                 body: JSON.stringify(updatedData),
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log('Question updated successfully: ',data);
//         })
//         .catch((error) => {
//             console.error('Error Updating question:',error);
//         });
//     };


//     render() {
//         const { questions } = this.state;

//         return (
//             <div className="question-editor">
//                 <table>
//                     <thead>
//                         <tr> 
//                         <td>  Question Description </td>
//                         <td> Option 1</td>
//                         <td> Option 2 </td>
//                         <td> Option 3</td>
//                         <td> Option 4</td>
//                         <td> Correct Answers</td>
//                         <td> Actions </td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {questions.map((question) => (
//                             <tr key={question.questionId}>
//                                 <td>{question.questionDescription}</td>
//                                 <td>{question.option1}</td>
//                                 <td>{question.option2}</td>
//                                 <td>{question.option3}</td>
//                                 <td>{question.option4}</td>
//                                 <td>{question.correctAnswer}</td>
//                                 <td>
//                                     <button onClick={() => this.handleQuestionUpdate(question.questionId, {
//                                         questionDescription: question.questionDescription,
//                                         option1: question.option1,
//                                         option2: question.option2,
//                                         option3: question.option3,
//                                         option4: question.option4,
//                                         correctAnswer: question.correctAnswer,
//                                     })}>
//                                         Update
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }

// export default QuestionEditor;