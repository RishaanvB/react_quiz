import { useState, useEffect } from 'react';
import './App.css';

import QuestionView from './views/QuestionView';
import ResultView from './views/ResultView';
import HighscoreView from './views/HighscoreView';
import HomeScreen from './views/HomeScreen';

function App() {
  const [gameState, setGameState] = useState('result');

  const [score, setScore] = useState(0);
  const maxRounds = 5;

  const updateScore = (point = 1) => {
    setScore(score + point);
  };

  const handleView = (view) => {
    setGameState(view);
  };

  const displayScreen = () => {
    switch (gameState) {
      case 'home':
        return <HomeScreen onHandleView={handleView} />;
      case 'quiz':
        return (
          <>
            <h1>{score}</h1>
            <QuestionView
              maxRounds={maxRounds}
              score={score}
              onHandleView={handleView}
              updateScore={updateScore}
            />
          </>
        );
      case 'result':
        return (
          <ResultView
            score={score}
            maxRounds={maxRounds}
            onHandleView={handleView}
          />
        );
      case 'highscores':
        return <HighscoreView onHandleView={handleView} />;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="container">
        {displayScreen()}

        <button
          style={{ position: 'absolute' }}
          onClick={() => handleView('home')}>
          Home
        </button>
      </div>
    </div>
  );
}

export default App;
