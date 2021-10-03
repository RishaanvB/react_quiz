import "./App.css";
import { useEffect, useState } from "react";
import Answer from "./Answer";

function App() {
  const [correctAnswer, setCorrectAnswer] = useState(
    "This is the correct answer"
  );
  const [wrongAnswers, setWrongAnswers] = useState([]);
  // const [category, setCategory] = useState("Category here");
  // const [difficulty, setDifficulty] = useState("Difficulty");
  const [question, setQuestion] = useState("");
  
  useEffect(() => {
    getTriviaData();
    shuffleAnswers();
  }, []);
  
  const getTriviaData = () => {
    console.log("getting data");
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.results[0].correct_answer);
        // console.log(result.results[0].category);
        // console.log(result.results[0].difficulty);
        console.log("correct answer-->", result.results[0].correct_answer);
        setQuestion(result.results[0].question);
        setCorrectAnswer(result.results[0].correct_answer);
        setWrongAnswers(result.results[0].incorrect_answers);
      });
  };

  const shuffleAnswers = () => {
    const ul = document.querySelector(".answers-block");
    for (let i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[(Math.random() * i) | 0]);
    }
  };
 

  const createWrongAnswers = [...Array(3)].map((_, index) => {
    return <Answer answer={wrongAnswers[index]} />;
  });

  return (
    <div className="App">
      <div className="question">
        <p dangerouslySetInnerHTML={{ __html: question }}></p>
      </div>
      <div className="answers-block">
        {createWrongAnswers}
        <Answer answer={correctAnswer} correctAnswer={true} />
      </div>
    </div>
  );
}

export default App;
