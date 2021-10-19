import { useEffect } from 'react/cjs/react.development';

import Button from '../components/Button';
import '../styles/ResultView.css';
import { animateButton } from '../helpers/helpers';

import imgStar from '../assets/Star_perspective_matte_s.png';
import imgFloppyDsk from '../assets/Save_perspective_matte_s.png';

export default function ResultView({ maxRounds, score }) {
  const handleSubmitScore = (e) => {
    e.preventDefault();

    console.log(e.target.username.value, '<--username');
    console.log('submitting score');
  };
  console.log(maxRounds);
  const totalScore = (score / maxRounds) * 100;
  return (
    <>
      <section className="star-images-container">
        <img className="star-image first" src={imgStar} alt="star" />
        <img className="star-image second" src={imgStar} alt="star" />
        <img className="star-image third" src={imgStar} alt="star" />
      </section>
      <div className="results-tally">
        <h3>
          {score}/{maxRounds}
        </h3>
        <h2>{totalScore}% CORRECT!</h2>
      </div>
      <Button styles="btn-congrats-yellow btn-normal animate-box-shadow">
        CONGRATULATIONS!
      </Button>
      <form onSubmit={handleSubmitScore} action="">
        <input
          className="btn-normal "
          type="text"
          name="username"
          id="username"
          placeholder="Your Name"
        />
        <Button imgSrc={imgFloppyDsk} styles="btn-submit-score btn-normal">
          Submit Score
        </Button>
      </form>
    </>
  );
}
