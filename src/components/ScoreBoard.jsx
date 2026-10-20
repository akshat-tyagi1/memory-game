import "./ScoreBoard.css";

function ScoreBoard({ score, bestScore }) {
  return (
    <div className="score-card">
      <p className="score">Score: {score}</p>
      <p className="best-score">Best Score: {bestScore}</p>
    </div>
  );
}

export default ScoreBoard;
