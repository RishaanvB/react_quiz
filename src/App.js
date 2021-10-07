import { useState } from "react";
import "./App.css";

import QuestionView from "./views/QuestionView";

import HomeScreen from "./views/HomeScreen";
import { animateButton } from "./helpers/helpers";

function App() {
  const [displayHomeView, setDisplayHomeView] = useState(false);
  const [displayQuestionView, displaySetQuestionView] = useState(true);

  const showHighscoreView = (e) => {
    console.log("display highscore view");
    animateButton(e.target);
  };

  const showQuestionView = () => {
    console.log("start quiz");
    setDisplayHomeView(false);
    displaySetQuestionView(true);
  };
  const goHome = () => {
    setDisplayHomeView(true);
    displaySetQuestionView(false);
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

        {displayQuestionView && <QuestionView />}
        <button style={{ position: "absolute" }} onClick={goHome}>
          Home
        </button>
      </div>
    </div>
  );
}

export default App;
