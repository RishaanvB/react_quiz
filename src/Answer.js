function Answer({answer, isCorrectAnswer, onHandleAnswerChange, isChecked}){

    return (
        <div >
            <input type="radio" name="answer" id={answer} value={answer} onChange={onHandleAnswerChange} />
            <label dangerouslySetInnerHTML={{__html:answer}} htmlFor={answer}></label>
            
        </div>
    )
}

export default Answer