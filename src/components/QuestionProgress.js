export default function QuestionProgress({ currentQuestion, maxRounds }) {
  return (
    <div className="progression-container">
      <div className="progression-bar">
        <span
          style={{ width: (currentQuestion / maxRounds) * 100 + "%" }}
          className="progress-bar-fill"></span>
      </div>
      <span className="questions-progression-container">
        <span className="questions-percentage">
          {currentQuestion}{" "}
          <span className="question-percentage-divider">/</span> {maxRounds}
        </span>
      </span>
    </div>
  );
}
