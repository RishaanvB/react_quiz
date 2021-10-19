import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Player from './Player';
import { getOrdinal } from '../helpers/helpers';

export default function Players() {
  const [playerData, setPlayerData] = useState([]);

  const url = 'http://localhost:5000/users';

  const fetchHighscores = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPlayerData(data);
  };

  useEffect(() => {
    fetchHighscores();
  }, []);

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
