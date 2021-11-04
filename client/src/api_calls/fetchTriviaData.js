const fetchToken = async () => {
  const reponse = await fetch(
    'https://opentdb.com/api_token.php?command=request'
  );
  const { token } = await reponse.json();
  return token;
};

const fetchResetToken = async () => {
  const response = await fetch(
    `https://opentdb.com/api_token.php?command=reset&token=${localStorage.getItem(
      'token'
    )}`
  );
  const { token } = await response.json();
  return token;
};

export const getTriviaData = async (
  setData,
  amountQuestion,
  difficulty = 'easy'
) => {
  try {
    const fetchResponse = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${amountQuestion}&type=multiple&difficulty=${difficulty}&token=${token}`
      );
      const result = await response.json();
      const responseCode = await result.response_code;
      return [responseCode, result.results];
    };

    const response = await fetchResponse();

    switch (response[0]) {
      case 0:
        // Code 0: Success Returned results successfully.
        console.log('token found and getting results');
        setData(response[1]);
        break;
      case 1:
        console.log(
          `Code 1: No Results Could not return results. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)`
        );
        throw new Error('Code 1, No results could be returned');
      case 2:
        console.log(
          `Code 2: Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid. (Ex. Amount = Five)`
        );
        throw new Error('Code 2, Invalid input');
      case 3:
        // Code 3: Token Not Found Session Token does not exist.
        console.log('token not found or does not exist');
        let token = await fetchToken().then((token) => token);
        localStorage.setItem('token', token);
        console.log('token created and stored in localstorage');
        let result = await fetchResponse();
        setData(result[1]);
        break;

      case 4:
        // Code 4: Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.
        console.log('token expired resetting  token');
        const resetToken = await fetchResetToken().then((token) => token);
        localStorage.setItem('token', resetToken);
        console.log('token created and stored in localstorage');
        setData(response[1]);
        result = await fetchResponse();
        setData(result[1]);
        break;

      default:
        break;
    }
  } catch (err) {
    console.log('Trivia data could not be loaded!');
    console.log(err);
  }
};
