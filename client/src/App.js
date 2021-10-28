import { useState } from 'react';
import './App.css';

import QuestionView from './views/QuestionView';
import ResultView from './views/ResultView';
import HighscoreView from './views/HighscoreView';
import HomeScreen from './views/HomeScreen';
import { useEffect } from 'react';
import { checkGameState } from './helpers/helpers';
function App() {
  const [gameState, setGameState] = useState('result');

  const [score, setScore] = useState(0);
  
  useEffect(() => {
    checkGameState(gameState);
  });
  
  const maxRounds = 5;

  const updateScore = (point = 1) => {
    setScore(score + point);
  };

  const handleView = (view) => {
    setGameState(view);
  };

  const displayScreen = () => {
    const homeScreen = <HomeScreen onHandleView={handleView} />;
    const questionScreen = (
      <QuestionView
        maxRounds={maxRounds}
        score={score}
        onHandleView={handleView}
        updateScore={updateScore}
      />
    );
    const resultScreen = (
      <ResultView
        score={score}
        maxRounds={maxRounds}
        onHandleView={handleView}
      />
    );
    const highscoreScreen = <HighscoreView onHandleView={handleView} />;

    switch (gameState) {
      case 'home':
        return homeScreen;
      case 'quiz':
        return questionScreen;
      case 'result':
        return resultScreen;
      case 'highscores':
        return highscoreScreen;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="container">{displayScreen()}</div>
    </div>
  );
}

export default App;
