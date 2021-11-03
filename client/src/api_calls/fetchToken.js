const saveToken = (token) => {
  localStorage.setItem('token', token);
};

export const fetchToken = async () => {
  const reponse = await fetch(
    'https://opentdb.com/api_token.php?command=request'
  );
  const { token } = await reponse.json();
  //   console.log(token);
  saveToken(token);
};
