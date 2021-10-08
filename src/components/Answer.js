import Button from "./Button";
import { animateButton } from "../helpers/helpers";

function Answer({ answer, isCorrectAnswer, onHandleAnswerGiven, isChecked }) {
  return (
    <button
      onClick={onHandleAnswerGiven}
      className="btn-answer btn-normal"
      dangerouslySetInnerHTML={{ __html: answer }}></button>
  );
}

export default Answer;
