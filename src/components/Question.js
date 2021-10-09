import "../styles/QuestionView.css";

export default function Question(props) {
  const styles = {
    margin: "auto ",
    padding: "1.5rem 1rem",
    fontSize: "1.2rem",
    color: "white",
    fontWeight: "lighter",
  };
  return (
    <div className="container-question">
      {!props.question ? (
        <h1 style={styles}>LOADING QUESTION...</h1>
      ) : (
        <h1
          className="question"
          dangerouslySetInnerHTML={{ __html: props.question }}></h1>
      )}
    </div>
  );
}
