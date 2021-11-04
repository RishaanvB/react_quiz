import '../styles/HighscoreView.css';
import Players from '../components/Players';
import { useEffect } from 'react';

export default function HighscoreView(props) {
  useEffect(() => (document.title = 'Highscores'));
  return (
    <div className="highscores-container intoView">
      <div className="metadata-container">
        <div className="highscores-metadata">
          <p>Pos.</p>
          <p>Name</p>
          <p>Score</p>
        </div>
        <div className="players-container">
          <Players />
        </div>
      </div>

      <button className="btn" onClick={() => props.onHandleView('home')}>
        Back to Home
      </button>
    </div>
  );
}
