import { setHighscore } from '../api_calls/fetchHighscores';
import { useState } from 'react/cjs/react.development';
import { useEffect, useRef } from 'react';
import FormError from './FormError';
export default function Form({
  score,
  handleScoreSubmission,
  isScoreSubmitted,
}) {
  const [isValid, setIsValid] = useState(false);
  const [input, setInput] = useState('');
  const inputEl = useRef(null);

  useEffect(() => validate());

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const validate = () => {
    input.match(/^[a-zA-Z0-9_]{1,8}$/) && setIsValid(true);
    !input.match(/^[a-zA-Z0-9_]{1,8}$/) && setIsValid(false);
  };
  const showFormError = () => (input.length > 0 && !isValid ? true : false);

  const handleChange = (e) => {
    setInput(e.target.value);
    validate();
  };

  const handleSubmitScore = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    handleScoreSubmission();
    setHighscore({ username: username, score: score });
  };

  const submitBtnEl = (
    <button
      disabled={!isValid}
      className={
        !isValid ? 'btn-submit-score btn btn-disabled' : 'btn-submit-score btn'
      }>
      Submit Score
    </button>
  );

  const textInputEl = (
    <input
      className="btn"
      type="text"
      name="username"
      id="username"
      placeholder="Your Name"
      value={input}
      onChange={handleChange}
      ref={inputEl}
    />
  );

  return (
    <>
      <form
        className="scoreForm"
        onSubmit={handleSubmitScore}
        action=""
        method="POST">
        {!isScoreSubmitted && textInputEl}
        {showFormError() && <FormError inputLength={input.length} />}
        {!isScoreSubmitted && submitBtnEl}
      </form>
    </>
  );
}
