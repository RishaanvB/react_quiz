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
  const [amountQuestion, setAmountQuestion] = useState(5);
  const [triviaData, setTriviaData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);


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

  const triviaCards = triviaData.map((triviaData, index) => (
    
    <TriviaCard
      triviaData={triviaData}
      key={index}
      updateScore={updateScore}
      maxRounds={maxRounds}
      onHandleView={onHandleView}
      onSetCurrentQuestion={setCurrentQuestion}
      currentQuestion={currentQuestion}

    />
  ));
  return <div className="triviaCard-container">{triviaCards}</div>;
}

export default QuestionView;
