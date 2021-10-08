import "../styles/QuestionView.css"

export default function Question(props){
return <div className="container-question">
    <h1 className="question" dangerouslySetInnerHTML={{__html: props.question}}></h1>
</div>
}