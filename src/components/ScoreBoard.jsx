function ScoreBoard({ score, bestScore }) {
  return (
    <>
      <p className="score">{score}</p>
      <p className="best-score">{bestScore}</p>
    </>
  );
}

export default ScoreBoard;
