import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Player from './Player';
import { getOrdinal } from '../helpers/helpers';
import { fetchHighscores } from '../api_calls/fetchHighscores';

export default function Players() {
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    displayHighscores();
  }, []);

  const displayHighscores = async () => {
    const data = await fetchHighscores();
    await setPlayerData(data);
  };

  const players = playerData.map((player, index) => (
    <Player
      key={player._id}
      position={index + 1}
      data={player}
      ordinal={getOrdinal(index)}
    />
  ));

  return <div>{players}</div>;
}
