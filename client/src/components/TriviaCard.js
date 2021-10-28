import { useState, useEffect } from 'react';

import AnswerList from './AnswerList';
import Question from './Question';
import QuestionProgress from './QuestionProgress';
import Answer from './Answer';
import {
  addClassName,
  handleBtnsClickable,
  shuffleAnswers,
} from '../helpers/helpers';

import '../styles/TriviaCard.css';

export const TriviaCard = ({
  triviaData,
  updateScore,
  maxRounds,
  onHandleView,
  onSetCurrentQuestion,
  currentQuestion,
}) => {
  const [isCardGone, setIsCardGone] = useState(false);
  const [correctAnswerGiven, setCorrectAnswerGiven] = useState();

  useEffect(() => {
    shuffleAnswers();
  }, []);
  // shuffleAnswers()
  const changeBtnColorOnFalse = (e) => {
    addClassName(e.target, 'wrong-answer-given');
    setTimeout(() => {
      setCorrectAnswerGiven('change');
    }, 50);
  };
  const changeBtnColorOnTrue = (e) => {
    addClassName(e.target, 'correct-answer-given');
  };
  const handleBtnAbility = () => {
    handleBtnsClickable('.btn', 'disable');
    setTimeout(() => {
      handleBtnsClickable('.btn', 'enable');
    }, 1000);
  };

  const handleBtnColorChange = (e, isCorrectAnswer) => {
    isCorrectAnswer ? changeBtnColorOnTrue(e) : changeBtnColorOnFalse(e);
  };

  const handleIsGameFinished = () => {
    if (currentQuestion >= maxRounds) {
      setTimeout(() => {
        onHandleView('result');
      }, 1000);
    } else if (currentQuestion < maxRounds) {
      onSetCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };
  const handleAnswerGiven = (e, isCorrectAnswer) => {
    handleBtnAbility();
    setIsCardGone(true);
    handleBtnColorChange(e, isCorrectAnswer);
    isCorrectAnswer && updateScore();
    handleIsGameFinished();
  };

  const wrongAnswers = [...Array(3)].map((_, index) => {
    return (
      <Answer
        key={index}
        answer={triviaData.incorrect_answers[index]}
        onHandleAnswerGiven={handleAnswerGiven}
      />
    );
  });

  const correctAnswer = (
    <Answer
      answer={triviaData.correct_answer}
      isCorrectAnswer={true}
      onHandleAnswerGiven={handleAnswerGiven}
      changeBgOnFalsePick={correctAnswerGiven}
    />
  );

  return (
    <div
      className={
        !isCardGone ? 'triviaCard intoView' : 'triviaCard animateCard'
      }>
      <Question question={triviaData.question} />
      <div className="bottom-triviaCard">
        <QuestionProgress
          currentQuestion={currentQuestion}
          maxRounds={maxRounds}
        />
        <AnswerList>
          {wrongAnswers}
          {correctAnswer}
        </AnswerList>
      </div>
    </div>
  );
};
