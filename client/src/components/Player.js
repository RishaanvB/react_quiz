import imgTrophy from '../assets/Trophy_perspective_matte_s.png';

export default function Player(props) {
  return (
    <div className="player-data ">
      <p className="player-first">
        {props.position === 1 && (
          <img className="player-first-icon" src={imgTrophy} alt="" />
        )}
        {props.position}
        <span className="ordinal">{props.ordinal}</span>
      </p>
      <p>{props.data.username}</p>
      <p>{props.data.score}</p>
    </div>
  );
}
