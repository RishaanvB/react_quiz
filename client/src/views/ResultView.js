import '../styles/ResultView.css';

import imgStar from '../assets/Star_perspective_matte_s.png';
import imgTrophy from '../assets/trophy.svg';
import Form from '../components/Form';
export default function ResultView({ maxRounds, score }) {
  const totalScorePercentage = (score / maxRounds) * 100;
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
      <img className='trophy' src={imgTrophy} alt="trophy" />
      <Form score={score} />
    </div>
  );
}
