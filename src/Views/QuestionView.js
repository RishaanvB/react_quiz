import { useEffect, useState } from "react";
import Answer from "../components/Answer";
import AnswerList from "../components/AnswerList";
import Question from "../components/Question";
import QuestionProgress from "../components/QuestionProgress";

import {
  resetBtnsStyling,
  shuffleAnswers,
  animateButton,
  addClassName,
  handleBtnsClickable,
} from "../helpers/helpers";

function QuestionView() {
  // setting hooks
  const [correctAnswer, setCorrectAnswer] = useState(
    "This is the correct answer"
  );
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [question, setQuestion] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);


  // getting data from api before render
  useEffect(() => {
    getTriviaData();
  }, [currentQuestion]);

  // reset styling for btns and shuffle them after new question gets loaded
  useEffect(() => {
    resetBtnsStyling();
    shuffleAnswers();
    handleBtnsClickable(".btn-answer", true);
  }, [question]);

  const getTriviaData = () => {
    console.log("getting data");
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple&difficulty=easy`)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.results[0].correct_answer);
        // console.log(result.results[0].category);
        // console.log(result.results[0].difficulty);
        setQuestion(result.results[0].question);
        setCorrectAnswer(result.results[0].correct_answer);
        setWrongAnswers(result.results[0].incorrect_answers);
      });
  };

  const isAnswerCorrect = (selected, correct) => selected === correct && true;
  const updateScore = (point = 1) => setScore(score + point);

  const changeBtnColor = (e) => {
    const selectedAnswer = e.target.innerText;
    if (isAnswerCorrect(selectedAnswer, correctAnswer)) {
      addClassName(e.target, "correct-answer-given");
    } else {
      addClassName(e.target, "wrong-answer-given");
    }
  };

  const handleAnswerGiven = (e) => {
    const selectedAnswer = e.target.innerText;

    animateButton(e.target);
    changeBtnColor(e);
    // handleBtnsClickable(".btn-answer", false);
    isAnswerCorrect(selectedAnswer, correctAnswer) && updateScore(1);

    // setTimeout(() => {
    //   setCurrentQuestion(currentQuestion + 1);
    // }, 10000);
  };

  const createWrongAnswers = [...Array(3)].map((_, index) => {
    return (
      <Answer
        key={index}
        answer={wrongAnswers[index]}
        onHandleAnswerGiven={handleAnswerGiven}
      />
    );
  });
  const createCorrectAnswer = (
    <Answer
      answer={correctAnswer}
      isCorrectAnswer={true}
      onHandleAnswerGiven={handleAnswerGiven}
    />
  );

  return (
    <>
      <h1>Score : {score}</h1>
      <div>
        <Question question={question} />
        <QuestionProgress  currentQuestion={currentQuestion}/>
      </div>
      <div>
        <AnswerList>
          {createWrongAnswers}
          {createCorrectAnswer}
        </AnswerList>
        {/* <Button handleClick={handlecurrentQuestion} styles="btn-ok">
          OK
        </Button> */}
      </div>
    </>
  );
}

export default QuestionView;
