import { useState } from 'react';

import AnswerList from './AnswerList';
import Question from './Question';
import QuestionProgress from './QuestionProgress';
import Answer from './Answer';
import { addClassName, handleBtnsClickable } from '../helpers/helpers';

import '../styles/TriviaCard.css';

export const TriviaCard = ({
  triviaData,
  updateScore,
  maxRounds,
  onHandleView,
  onSetCurrentQuestion,
  currentQuestion,
}) => {
  const [isGone, setIsGone] = useState(false);

  const changeBtnColorOnFalse = (e) => {
    addClassName(e.target, 'wrong-answer-given');
  };
  const changeBtnColorOnTrue = (e) => {
    addClassName(e.target, 'correct-answer-given');
  };
  const handleAnswerGiven = (e, isCorrectAnswer) => {
    setIsGone(true);
    isCorrectAnswer ? changeBtnColorOnTrue(e) : changeBtnColorOnFalse(e);

    isCorrectAnswer && updateScore();
    if (currentQuestion >= maxRounds) {
      setTimeout(() => {
        onHandleView('result');
      }, 1000);
    } else if (currentQuestion < maxRounds) {
      onSetCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const createWrongAnswers = [...Array(3)].map((_, index) => {
    return (
      <Answer
        key={index}
        answer={triviaData.incorrect_answers[index]}
        onHandleAnswerGiven={handleAnswerGiven}
      />
    );
  });

  const createCorrectAnswer = (
    <Answer
      answer={triviaData.correct_answer}
      isCorrectAnswer={true}
      onHandleAnswerGiven={handleAnswerGiven}
      // key="3"
    />
  );

  return (
    <div className={!isGone ? 'triviaCard intoView' : 'triviaCard animateCard'}>
      <Question question={triviaData.question} />
      <div className="bottom-triviaCard">
        <QuestionProgress
          currentQuestion={currentQuestion}
          maxRounds={maxRounds}
        />
        <AnswerList>
          {createWrongAnswers}
          {createCorrectAnswer}
        </AnswerList>
      </div>
    </div>
  );
};
