import Button from "./Button";
function Answer({ answer, isCorrectAnswer, handleClick, isChecked }) {
  return (
  <Button styles="btn-answer" handleClick={handleClick} >
    <p className="answerbtn-innertext" dangerouslySetInnerHTML={{__html: answer}}></p>
  </Button>
  );
}

export default Answer;
