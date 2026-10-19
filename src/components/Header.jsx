import ScoreBoard from "./ScoreBoard";

function Header({ score, bestScore }) {
  return (
    <>
      <div className="header">
        <h1 className="name">Pokemon Memory Game</h1>
        <ScoreBoard score={score} bestScore={bestScore} />
      </div>

      <span className="info">
        Get Points By Clicking a Unique Image Each time.
      </span>
    </>
  );
}

export default Header;