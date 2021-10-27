import { setHighscore } from '../api_calls/fetchHighscores';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import FormError from './FormError';
export default function Form({ score }) {
  const [isValid, setIsValid] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => validate());

  const validate = () => {
    input.match(/^[a-zA-Z0-9_]{1,8}$/) && setIsValid(true);
    !input.match(/^[a-zA-Z0-9_]{1,8}$/) && setIsValid(false);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    validate();
  };

  const handleSubmitScore = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    setHighscore({ username: username, score: score });
  };
  const showFormError = () => (input.length > 0 && !isValid ? true : false);

  return (
    <form
      className="scoreForm"
      onSubmit={handleSubmitScore}
      action=""
      method="POST">
      <input
        className="btn"
        type="text"
        name="username"
        id="username"
        placeholder="Your Name"
        value={input}
        onChange={handleChange}
        />
        {showFormError() && <FormError inputLength={input.length} />}

      <button disabled={!isValid} className={!isValid ? "btn-submit-score btn btn-disabled" : "btn-submit-score btn"}>
        Submit Score
      </button>
    </form>
  );
}
