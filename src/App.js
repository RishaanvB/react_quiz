import { useState } from "react";
import "./App.css";

import QuestionView from "./views/QuestionView";
import ResultView from "./views/ResultView";

import HomeScreen from "./views/HomeScreen";
import { animateButton } from "./helpers/helpers";

function App() {
  const [displayHomeView, setDisplayHomeView] = useState(false);
  const [displayQuestionView, setDisplayQuestionView] = useState(true);
  const [displayResultView, setDisplayResultView] = useState(false);

  const [score, setScore] = useState(0);
  console.log("score is ==>", score);
  const updateScore = (point = 1) => {
    setScore(score + point);
  };

  const showHighscoreView = (e) => {
    console.log("display highscore view");
    animateButton(e.target);
  };

  const showQuestionView = () => {
    console.log("start quiz");
    setDisplayHomeView(false);
    setDisplayQuestionView(true);
  };
  const goHome = () => {
    setDisplayHomeView(true);
    setDisplayQuestionView(false);
  };
  const showResultScreen = () => {
    console.log("score is ==>", score);
    setDisplayResultView(true);
    setDisplayQuestionView(false);
  };
  return (
    <div className="App">
      <div className="container">
        {displayHomeView && (
          <HomeScreen
            handleHighscoreView={showHighscoreView}
            handleQuestionView={showQuestionView}
          />
        )}
        {displayQuestionView && <h1>{score}</h1>}
        {displayQuestionView && (
          <QuestionView
            score={score}
            showResultScreen={showResultScreen}
            updateScore={updateScore}
          />
        )}
        {displayResultView && <ResultView score={score} />}
        <button style={{ position: "absolute" }} onClick={goHome}>
          Home
        </button>
      </div>
    </div>
  );
}

export default App;
