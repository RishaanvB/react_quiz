import { useState } from "react";
import "./App.css";

import QuestionView from "./Views/QuestionView";

import HomeScreen from "./Views/HomeScreen";

function App() {
  const [displayHomeView, setDisplayHomeView] = useState(true);
  const [displayQuestionView, displaySetQuestionView] = useState(false);

  const animateButton = (target) => {
    target.classList.add("animate-btn");
    setTimeout(() => target.classList.remove("animate-btn"), 250);
  };
  const showHighscoreView = (e) => {
    console.log("display highscore view");
    animateButton(e.target);
  };

  const showQuestionView = () => {
    console.log("start quiz");
    setDisplayHomeView(false);
    displaySetQuestionView(true);
  };

  return (
    <div className="App background-gradient">
      {displayHomeView && (
        <HomeScreen
          handleHighscoreView={showHighscoreView}
          handleQuestionView={showQuestionView}
        />
      )}

      {displayQuestionView && <QuestionView />}
    </div>
  );
}

export default App;
