import { useEffect, useState } from 'react';
import Answer from '../components/Answer';
import AnswerList from '../components/AnswerList';
import Question from '../components/Question';
import QuestionProgress from '../components/QuestionProgress';
import { TriviaCard } from '../components/TriviaCard';

import {
  resetBtnsStyling,
  shuffleAnswers,
  animateButton,
  addClassName,
  handleBtnsClickable,
} from '../helpers/helpers';
import { getTriviaData } from '../api_calls/fetchTriviaData';
function QuestionView({ updateScore, onHandleView, maxRounds }) {
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [question, setQuestion] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [amountQuestion, setAmountQuestion] = useState(10);
  const [triviaData, setTriviaData] = useState([1, 2]);
  console.log(correctAnswer);

  // getting quiz data
  useEffect(() => {
    getTriviaData(setTriviaData, amountQuestion);
  }, [amountQuestion]);

  // reset styling for btns and shuffle them after new question gets loaded
  // useEffect(() => {
  //   resetBtnsStyling();
  //   // shuffleAnswers();
  //   handleBtnsClickable('.btn-answer', true);
  // }, [question]);

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
      onHandleView('result');
    } else if (currentQuestion < maxRounds) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // const createWrongAnswers = [...Array(3)].map((_, index) => {
  //   return (
  //     <Answer
  //       key={index}
  //       answer={wrongAnswers[index]}
  //       onHandleAnswerGiven={handleAnswerGiven}
  //     />
  //   );
  // });
  // const createCorrectAnswer = (
  //   <Answer
  //     answer={correctAnswer}
  //     isCorrectAnswer={true}
  //     onHandleAnswerGiven={handleAnswerGiven}
  //     // key="3"
  //   />
  // );
  const triviaCards = triviaData.map((triviaData, index) => (
    <TriviaCard triviaData={triviaData} key={index} />
  ));
  return (
    <>
      {triviaCards}
      {/* <div>
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
      </div> */}
    </>
  );
}

export default QuestionView;
