export default function QuestionProgress() {
  return (
    <div className="progression-container">
      <span className="questions-progression-container">
        <span className="questions-percentage">
          4 <span className="question-percentage-divider">/</span> 10
        </span>
      </span>
      <div className="progression-bar">
        <span className="progress-bar-fill"></span>
      </div>
    </div>
  );
}
