export default function QuestionProgress({ currentQuestion }) {
  return (
    <div className="progression-container">
      <div className="progression-bar">
        <span
          style={{ width: currentQuestion * 10 + "%" }}
          className="progress-bar-fill"></span>
      </div>
      <span className="questions-progression-container">
        <span className="questions-percentage">
          {currentQuestion}{" "}
          <span className="question-percentage-divider">/</span> 10
        </span>
      </span>
    </div>
  );
}
