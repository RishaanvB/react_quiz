export const fetchToken = async () => {
  const reponse = await fetch(
    'https://opentdb.com/api_token.php?command=request'
  );
  const { token } = await reponse.json();
  //   console.log(token);
  return token
};

export const getTriviaData = async (
  setData,
  amountQuestion,
  
  difficulty = 'easy'
) => {
  console.log('getting data');
  try {
    const token = localStorage.getItem('token')
    if (token){
      console.log('token found');
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${amountQuestion}&type=multiple&difficulty=${difficulty}&token=${token}`
      );
      const result = await response.json();
      setData(result.results);

    }

    if(!token) {
      console.log('token NOT found');
      const token = await fetchToken();
      console.log(token);
      localStorage.setItem('token', token)
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${amountQuestion}&type=multiple&difficulty=${difficulty}&token=${token}`
      );
      const result = await response.json();
      setData(result.results);

      
    }
    
    
    
  } catch (err) {
    console.log('Trivia data could not be loaded!');
    console.log(err);
  }
};
