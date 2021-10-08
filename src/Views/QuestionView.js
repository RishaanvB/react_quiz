import { useEffect, useState } from "react";
import Answer from "../components/Answer";
import AnswerList from "../components/AnswerList";
import Question from "../components/Question";
import QuestionProgress from "../components/QuestionProgress";
import Button from "../components/Button";

import {
  resetBtnsStyling,
  shuffleAnswers,
  animateButton,
  changeColor,
} from "../helpers/helpers";

function QuestionView() {
  const [correctAnswer, setCorrectAnswer] = useState(
    "This is the correct answer"
  );
  const [wrongAnswers, setWrongAnswers] = useState([]);
  // const [category, setCategory] = useState("Category here");
  // const [difficulty, setDifficulty] = useState("Difficulty");
  const [question, setQuestion] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [nextQuestion, setNextQuestion] = useState(1);
  const [score, setScore] = useState(0);

  useEffect(() => {
    getTriviaData();
  }, [nextQuestion]);

  useEffect(() => {
    resetBtnsStyling();
    shuffleAnswers();
  }, [question]);

  const getTriviaData = () => {
    console.log("getting data");
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple&difficulty=easy`)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.results[0].correct_answer);
        // console.log(result.results[0].category);
        // console.log(result.results[0].difficulty);
        console.log("correct answer-->", result.results[0].correct_answer);
        setQuestion(result.results[0].question);
        setCorrectAnswer(result.results[0].correct_answer);
        setWrongAnswers(result.results[0].incorrect_answers);
      });
  };

  const handleAnswerChange = (e) => {
    console.log(e);
    e.stopPropagation()
    setSelectedAnswer(e.target.innerText);
    animateButton(e.target.parentNode);
    resetBtnsStyling();
    changeColor(e.target.parentNode, "selected-answer");
  };

  const handleNextQuestion = () => {
    const selectedAnswer = document.querySelector(".selected-answer");
    if (!isAnswerCorrect()) {
      changeColor(selectedAnswer, "wrong-answer-given");
    } else {
      updateScore();
      changeColor(selectedAnswer, "correct-answer-given");
    }
  };
  const isAnswerCorrect = () => selectedAnswer === correctAnswer && true;

  const updateScore = (point = 1) => setScore(score + point);

  const createWrongAnswers = [...Array(3)].map((_, index) => {
    return (
      <Answer
        key={index}
        answer={wrongAnswers[index]}
        onHandleAnswerChange={handleAnswerChange}
      />
    );
  });
  const createCorrectAnswer = (
    <Answer
      answer={correctAnswer}
      isCorrectAnswer={true}
      onHandleAnswerChange={handleAnswerChange}
    />
  );
  console.log("selected answer-->", selectedAnswer);
  console.log(selectedAnswer === correctAnswer);

  return (
    <>
      <h1>Score : {score}</h1>
      <div>
        <Question question={question} />
        <QuestionProgress />
      </div>
      <div>
        <AnswerList>
          {createWrongAnswers}
          {createCorrectAnswer}
        </AnswerList>
        <Button handleClick={handleNextQuestion} styles="btn-ok">
          OK
        </Button>
      </div>
    </>
  );
}

export default QuestionView;
