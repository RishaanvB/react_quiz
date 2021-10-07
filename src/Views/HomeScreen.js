import Button from "../components/Button";

import imgTrophy from "../assets/Trophy_perspective_matte_s.png";
import imgLogo from "../assets/FAQ_perspective_matte.png";
import imgRocket from "../assets/Rocket_perspective_matte_s.png";

export default function HomeScreen(props) {
  return (
    <>
      <img className="homescreen-logo" src={imgLogo} alt="questionmark logo" />
      <h1 className="quiz-title">QUIZKNOWS</h1>
      <Button
        imgSrc={imgTrophy}
        styles="btn-highscore"
        handleClick={props.handleHighscoreView}>
        Highscores
      </Button>
      <Button
        imgSrc={imgRocket}
        styles="btn-start"
        handleClick={props.handleQuestionView}>
        Start
      </Button>
    </>
  );
}