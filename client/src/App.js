import './App.css';

import QuestionView from './views/QuestionView';
import ResultView from './views/ResultView';
import HighscoreView from './views/HighscoreView';
import HomeScreen from './views/HomeScreen';
import { useEffect, useState } from 'react';
import { checkGameState } from './helpers/helpers';
function App() {
  const [gameState, setGameState] = useState('result');
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const resetGame = () => {
    resetScore();
    setCurrentQuestion(1);
    handleView('quiz');
  };

  const maxRounds = 2;

  useEffect(() => {
    checkGameState(gameState);
  });

  const resetScore = () => setScore(0);

  const updateScore = (point = 1) => {
    setScore(score + point);
  };

  const handleView = (view) => {
    setGameState(view);
  };

  const displayScreen = () => {
    const homeScreen = (
      <HomeScreen onHandleView={handleView} resetGame={resetGame} />
    );
    const questionScreen = (
      <QuestionView
        maxRounds={maxRounds}
        score={score}
        onHandleView={handleView}
        updateScore={updateScore}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    );
    const resultScreen = (
      <ResultView
        score={score}
        maxRounds={maxRounds}
        handleView={handleView}
        resetGame={resetGame}
        setCurrentQuestion={setCurrentQuestion}
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
