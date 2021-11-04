
const API_URL = 'https://react-quiz-backend.herokuapp.com/users';

export const fetchHighscores = async () => {
  const response = await fetch(API_URL);
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
    const result = await fetch(API_URL, options);
    const data = await result.json();
    console.log(data.errors);
  } catch (error) {
    console.log(error);
  }
};
