import { useEffect, useState } from 'react';
import { TriviaCard } from '../components/TriviaCard';

import { getTriviaData } from '../api_calls/fetchTriviaData';
function QuestionView({ updateScore, onHandleView, maxRounds }) {
  const [amountQuestion, setAmountQuestion] = useState(5);
  const [triviaData, setTriviaData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  // getting quiz data
  useEffect(() => {
    getTriviaData(setTriviaData, amountQuestion);
  }, [amountQuestion]);

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
