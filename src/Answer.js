function Answer({answer, correctAnswer}){
    return (
        correctAnswer ? 
        <p style={{color: "green", fontWeight:"bold", fontSize: '24px'}} dangerouslySetInnerHTML={{ __html: answer}}></p> :
        <p dangerouslySetInnerHTML={{ __html: answer}}></p>
    )
}

export default Answer