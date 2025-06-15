import eightBall from "../assets/8_ball.JPG"
import answerBall from "../assets/answer_ball.JPG"

function Image ({isQuestionBall}) {
  let ballImage;

  if (isQuestionBall) {
    ballImage = eightBall;
  } else {
    ballImage = answerBall;
  }

  return (
    <div className="wrapper">
      <img src={ballImage} alt="Image of an 8 ball"/>
    </div>
  )
}

export default Image