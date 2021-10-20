const url = 'http://localhost:5000/users';

export const fetchHighscores = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const setHighscore = async (data) => {
  const userData = { username: data.username, score: data.score };
  const options = {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const result = await fetch(url, options);
    const data = await result.json();
    console.log(data.errors);
  } catch (error) {
    console.log(error);
  }
};
