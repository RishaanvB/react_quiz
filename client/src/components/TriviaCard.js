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

  const isAnswerCorrect = (selected, correct) => selected === correct && true;

  const changeBtnColor = (e) => {
    const selectedAnswer = e.target.innerText;
    if (isAnswerCorrect(selectedAnswer, triviaData.correct_answer)) {
      addClassName(e.target, 'correct-answer-given');
    } else {
      addClassName(e.target, 'wrong-answer-given');
    }
  };

  const handleAnswerGiven = (e) => {
    // refactor, correct answer is given to element via props.. just check prop to check if answer is correct
    // also fixes issue with comparing answer with innertext of btn re: special characters in answers/question
    const selectedAnswer = e.target.innerText;
    setIsGone(true);
    changeBtnColor(e);
    isAnswerCorrect(selectedAnswer, triviaData.correct_answer) && updateScore();
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
      <QuestionProgress currentQuestion={''} />
      <AnswerList>
        {createWrongAnswers}
        {createCorrectAnswer}
      </AnswerList>
    </div>
  );
};
