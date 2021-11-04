function Answer({
  answer,
  isCorrectAnswer,
  onHandleAnswerGiven,
  changeBgOnFalsePick,
}) {
  return (
    <button
      onClick={(e) => onHandleAnswerGiven(e, isCorrectAnswer)}
      className={
        changeBgOnFalsePick === 'change'
          ? 'btn btn-answer show-correct-answer'
          : 'btn btn-answer '
      }
      dangerouslySetInnerHTML={{ __html: answer }}></button>
  );
}

export default Answer;
