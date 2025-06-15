import {useState} from "react";
import AgainButton from "./AgainButton";
import Answer from "./Answer";
import Image from "./Image";
import Form from "./Form";

function Test () {
  const [isQuestionScreen, setIsQuestionScreen] = useState(true);
  const [questionText, setQuestionText] = useState();

  //Change between question and answer screens
  function handleClick () {
    if(!isQuestionScreen) {
      setQuestionText("");
    }
    setIsQuestionScreen(!isQuestionScreen);
  }

  //Save question to display on answer screen and move there
  function handleSubmit(event) {
    event.preventDefault();
    setQuestionText(event.target.text.value);
    handleClick();
  }

  const QuestionScreen = (
    <>
      <Image isQuestionBall={isQuestionScreen}/>
      <h4>What is your question?</h4>
      <Form onSubmit={handleSubmit}/>
    </>    
  );
  
  const AnswerScreen = (
    <>
      <Image isQuestionBall={isQuestionScreen}/>
      <p>{questionText}</p>
      <Answer/>
      <AgainButton onClick={handleClick}/>
    </>    
  );

  return (
    <>{isQuestionScreen ? QuestionScreen : AnswerScreen}</>
  )
}

export default Test