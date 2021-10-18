import { useState } from 'react';
import './App.css';

import QuestionView from './views/QuestionView';
import ResultView from './views/ResultView';
import HighscoreView from './views/HighscoreView';
import HomeScreen from './views/HomeScreen';

import { animateButton } from './helpers/helpers';
import { useEffect } from 'react/cjs/react.development';

function App() {
  const [gameState, setGameState] = useState('home');
  const [isConnected, setIsConnected] = useState('not connected');

  const [score, setScore] = useState(0);
  // const [maxRounds, setMaxRounds] = useState(5);
  const maxRounds = 5;

  // connect to api
  useEffect(() => {
    fetch('/data')
      .then((res) => res.json())
      .then((data) => {
        setIsConnected(data);
      });
  }, []);

  // console.log('score is ==>', score);
  const updateScore = (point = 1) => {
    setScore(score + point);
  };

  const showHighscoreView = (e) => {
    console.log('display highscore view');
    setGameState('highscores');
    animateButton(e.target);
  };

  const showQuestionView = () => {
    console.log('start quiz');
    setGameState('quiz');
  };
  const goHome = () => {
    setGameState('home');
  };
  const showResultScreen = () => {
    console.log('score is ==>', score);
    setGameState('result');
  };

  const displayScreen = () => {
    switch (gameState) {
      case 'home':
        return (
          <HomeScreen
            handleHighscoreView={showHighscoreView}
            handleQuestionView={showQuestionView}
          />
        );
      case 'quiz':
        return (
          <>
            <h1>{score}</h1>
            <QuestionView
              maxRounds={maxRounds}
              score={score}
              showResultScreen={showResultScreen}
              updateScore={updateScore}
            />
          </>
        );
      case 'result':
        return <ResultView score={score} maxRounds={maxRounds} />;
      case 'highscores':
        return <HighscoreView />;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1>{isConnected}</h1>
      <div className="container">
        {displayScreen()}

        <button style={{ position: 'absolute' }} onClick={goHome}>
          Home
        </button>
      </div>
    </div>
  );
}

export default App;
