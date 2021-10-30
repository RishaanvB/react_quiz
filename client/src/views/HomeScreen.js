import { useEffect } from 'react';
import imgLogo from '../assets/FAQ_perspective_matte.png';

import '../styles/HomeScreen.css';

export default function HomeScreen(props) {
  useEffect(() => {
    document.title = 'Quiz Home'
  })
  return (
    <div className="homescreen intoView">
      <img className="homescreen-logo" src={imgLogo} alt="questionmark logo" />
      <h1 className="quiz-title">QUIZKNOWS</h1>
      <div className="homescreen-btn-container">
        <button
          className="btn btn-start"
          onClick={props.resetGame}>
          Start
        </button>
        <button
          className="btn btn-highscores"
          onClick={() => props.onHandleView('highscores')}>
          Highscores
        </button>
      </div>
    </div>
  );
}
