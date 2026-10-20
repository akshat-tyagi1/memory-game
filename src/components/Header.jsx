import ScoreBoard from "./ScoreBoard";
import "./Header.css";

function Header({ score, bestScore }) {
  return (
    <>
      <div className="header">
        <div className="title">
          <h1 className="name">Pokemon Memory Game</h1>
          <p className="info">
            Get Points By Clicking a Unique Image Each time.
          </p>
        </div>

        <ScoreBoard score={score} bestScore={bestScore} />
      </div>
    </>
  );
}

export default Header;
