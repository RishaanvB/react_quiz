import Button from "./Button";
import { animateButton } from "../helpers/helpers";

function Answer({ answer, isCorrectAnswer, onHandleAnswerChange, isChecked }) {
  return (
    <Button styles="btn-answer">
      <p
        onClick={onHandleAnswerChange}
        className="answerbtn-innertext"
        dangerouslySetInnerHTML={{ __html: answer }}></p>
    </Button>
  );
}

export default Answer;
