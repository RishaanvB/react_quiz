function Answer({ answer, isCorrectAnswer, onHandleAnswerGiven, isChecked }) {
  isCorrectAnswer && console.log(answer)
  return (
      <button
        onClick={(e) => onHandleAnswerGiven(e, isCorrectAnswer)}
        className="btn btn-answer "
        dangerouslySetInnerHTML={{ __html: answer }}></button>
  );
}

export default Answer;
