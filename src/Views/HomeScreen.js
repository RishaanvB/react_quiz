import MenuButton from "../MenuButton";

import imgTrophy from "../assets/Trophy_perspective_matte_s.png";
import imgLogo from "../assets/FAQ_perspective_matte.png";
import imgRocket from "../assets/Rocket_perspective_matte_s.png";

export default function HomeScreen(props) {
  return (
    <>
      <img className="homescreen-logo" src={imgLogo} alt="questionmark logo" />
      <h1 className="quiz-title">QUIZKNOWS</h1>
      <MenuButton
        imgSrc={imgTrophy}
        bgColor="btn-pink"
        handleClick={props.handleHighscoreView}>
        Highscores
      </MenuButton>
      <MenuButton
        imgSrc={imgRocket}
        bgColor="btn-white"
        handleClick={props.handleQuestionView}>
        Start
      </MenuButton>
    </>
  );
}
