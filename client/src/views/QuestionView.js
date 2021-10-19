import { useEffect, useState } from 'react';
import Answer from '../components/Answer';
import AnswerList from '../components/AnswerList';
import Question from '../components/Question';
import QuestionProgress from '../components/QuestionProgress';

import {
  resetBtnsStyling,
  shuffleAnswers,
  animateButton,
  addClassName,
  handleBtnsClickable,
} from '../helpers/helpers';

function QuestionView({ updateScore, onHandleView, maxRounds }) {
  // setting hooks
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [question, setQuestion] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const delay = 200;
  console.log(correctAnswer);

  // getting data from api before render
  useEffect(() => {
    setTimeout(() => {
      getTriviaData();
    }, delay);
  }, [currentQuestion]);

  // reset styling for btns and shuffle them after new question gets loaded
  useEffect(() => {
    resetBtnsStyling();
    shuffleAnswers();
    handleBtnsClickable('.btn-answer', true);
  }, [question]);

  const getTriviaData = () => {
    console.log('getting data');
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

  const changeBtnColor = (e) => {
    const selectedAnswer = e.target.innerText;
    if (isAnswerCorrect(selectedAnswer, correctAnswer)) {
      addClassName(e.target, 'correct-answer-given');
    } else {
      addClassName(e.target, 'wrong-answer-given');
    }
  };

  const handleAnswerGiven = (e) => {
    // refactor, correct answer is given to element via props.. just check prop to check if answer is correct
    // also fixes issue with comparing answer with innertext of btn re: special characters in answers/question
    const selectedAnswer = e.target.innerText;

    animateButton(e.target);
    changeBtnColor(e);
    handleBtnsClickable('.btn-answer', false);
    isAnswerCorrect(selectedAnswer, correctAnswer) && updateScore();
    if (currentQuestion >= maxRounds) {
      setTimeout(() => {
        onHandleView('result');
      }, delay);
    } else if (currentQuestion < maxRounds) {
      setCurrentQuestion(currentQuestion + 1);
    }
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
      // key="3"
    />
  );

  return (
    <>
      <div>
        <Question question={question} />
        <QuestionProgress
          currentQuestion={currentQuestion}
          maxRounds={maxRounds}
        />
      </div>
      <div>
        <AnswerList>
          {createWrongAnswers}
          {createCorrectAnswer}
        </AnswerList>
      </div>
    </>
  );
}

export default QuestionView;
