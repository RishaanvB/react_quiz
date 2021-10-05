import { useState } from "react";
import "./App.css";
import QuestionView from "./QuestionView";
import MenuButton from "./MenuButton";

import imgTrophy from "../src/assets/Trophy_perspective_matte_s.png";
import imgLogo from "../src/assets/FAQ_perspective_matte.png";
import imgRocket from "../src/assets/Rocket_perspective_matte_s.png";

function App() {
  const [activeStartScreen, setActiveStartScreen] = useState(true);

  const animateButton = (target) => {
    target.classList.add("animate-btn");
    setTimeout(() => target.classList.remove("animate-btn"), 250);
  };
  const toHighscoreView = (e) => {
    console.log("display highscore view");
    animateButton(e.target);
  };

  const toQuestionView = () => {
    console.log("start quiz");
  };

  return (
    <div className="App background-gradient">
      <img className="homescreen-logo" src={imgLogo} alt="questionmark logo" />
      <h1 className="quiz-title">QUIZKNOWS</h1>
      <MenuButton
        imgSrc={imgTrophy}
        bgColor="btn-pink"
        handleClick={toHighscoreView}>
        Highscores
      </MenuButton>
      <MenuButton
        imgSrc={imgRocket}
        bgColor="btn-white"
        handleClick={toQuestionView}>
        Start
      </MenuButton>
    </div>
  );
}

export default App;
