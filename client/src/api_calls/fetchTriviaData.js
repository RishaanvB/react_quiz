export const getTriviaData = async (
  setData,
  amountQuestion,
  difficulty = 'easy'
) => {
  console.log('getting data');
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${amountQuestion}&type=multiple&difficulty=${difficulty}`
    );

    const result = await response.json();
    if (result.response_code === 0) {
      setData(result.results);
      console.log(result.results);
    }
    if (!result.response_code === 0) {
      console.log(result.response_code);
    }
  } catch (err) {
    console.log('Trivia data could not be loaded!');
    console.log(err);
  }
};
