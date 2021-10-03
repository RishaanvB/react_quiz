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
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [nextQuestion, setNextQuestion] = useState(1);
  const [score, setScore] = useState(0);

  useEffect(() => {
    getTriviaData();
  }, [nextQuestion]);

  useEffect(() => {
    shuffleAnswers();
  }, [question]);
  
  const getTriviaData = () => {
    console.log("getting data");
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple&difficulty=easy`)
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

  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };
  const handleNextQuestion = () => {
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.checked = false;
    });
    setNextQuestion(nextQuestion + 1);
  };
  const createWrongAnswers = [...Array(3)].map((_, index) => {
    return (
      <Answer
        key={index}
        answer={wrongAnswers[index]}
        onHandleAnswerChange={handleAnswerChange}
      />
    );
  });
  console.log("selected answer-->", selectedAnswer);
  console.log(selectedAnswer === correctAnswer);

  return (
    <div className="App">
      <div className="question">
        <p dangerouslySetInnerHTML={{ __html: question }}></p>
      </div>
      <div className="answers-block">
        {createWrongAnswers}
        <Answer
          answer={correctAnswer}
          isCorrectAnswer={true}
          onHandleAnswerChange={handleAnswerChange}
        />
      </div>
      <div>
        <button onClick={handleNextQuestion}>Next Question</button>
      </div>
    </div>
  );
}

export default App;
