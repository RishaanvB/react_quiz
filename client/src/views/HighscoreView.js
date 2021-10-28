import '../styles/HighscoreView.css';
import imgClipboard from '../assets/Clipboard_perspective_matte_s.png';

import Players from '../components/Players';
import Button from '../components/Button';
import { useEffect } from 'react/cjs/react.development';

export default function HighscoreView(props) {
  useEffect(() => (document.title = 'Highscores'));
  return (
    <>
      <div className="highscores-container">
        <img src={imgClipboard} className="clipboard-icon" alt="" />

        <div className="highscores-metadata">
          <p>Pos.</p>
          <p>Name</p>
          <p>Score</p>
        </div>
        <div className="players-container">
          <Players />
        </div>
      </div>
      <Button
        styles="btn-go-back"
        handleClick={() => props.onHandleView('home')}>
        Go Back
      </Button>
    </>
  );
}
