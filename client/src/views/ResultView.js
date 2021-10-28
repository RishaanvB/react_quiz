import '../styles/ResultView.css';

import imgStar from '../assets/Star_perspective_matte_s.png';
import imgTrophy from '../assets/trophy.svg';
import Form from '../components/Form';
import { useEffect, useState } from 'react';
export default function ResultView({
  maxRounds,
  score,
  handleView,
  resetScore,
  setCurrentQuestion,
}) {
  useEffect(() => (document.title = 'Results!'));
  const [isScoreSubmitted, setisScoreSubmitted] = useState(false);

  const resetGame = () => {
    resetScore();
    setCurrentQuestion(1);
    handleView('quiz');
  };

  const totalScorePercentage = (score / maxRounds) * 100;
  const restartGameBtnEl = (
    <button onClick={resetGame} className="btn btn-restart" key="restart">
      Restart
    </button>
  );

  const handleScoreSubmission = () => {
    setisScoreSubmitted(true);
  };
  const displayHighscoreBtnEl = (
    <button
      onClick={() => handleView('highscores')}
      className="btn btn-goto-highscores"
      key="highscore">
      Highscores
    </button>
  );

  return (
    <div className="result-screen-container intoView">
      <section className="star-images-container">
        <img className="star-image first" src={imgStar} alt="star" />
        <img className="star-image second" src={imgStar} alt="star" />
        <img className="star-image third" src={imgStar} alt="star" />
      </section>
      <div className="results-tally">
        <h3>
          {score}/{maxRounds}
        </h3>
        <h2>{totalScorePercentage}% CORRECT!</h2>
      </div>
      <img className="trophy" src={imgTrophy} alt="trophy" />
      <Form
        score={score}
        handleScoreSubmission={handleScoreSubmission}
        isScoreSubmitted={isScoreSubmitted}
      />
      {isScoreSubmitted && [restartGameBtnEl, displayHighscoreBtnEl]}
    </div>
  );
}
