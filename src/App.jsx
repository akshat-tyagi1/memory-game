import { useState, useEffect } from "react";
import Header from "./components/Header";
import CardsGrid from "./components/CardsGrid";
import fetchCards from "./utils/fetchCards";
import shuffleCards from "./utils/shuffleCards";
import "./App.css";

const pokemonIds = [
  25, 6, 1, 7, 133, 150, 151, 94, 143, 448, 130, 149, 39, 54, 658, 282, 59, 131,
];

function App() {
  const [cardsInfo, setCardsInfo] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getImages() {
      try {
        // fetches all the necessary details about pokemons and upadate the state.

        let cards = await Promise.all(pokemonIds.map((id) => fetchCards(id)));
        setCardsInfo(shuffleCards(cards));
      } catch (error) {
        console.error("Failed to load Pokémon cards:", error);
        setError(
          "Couldn't load the Pokémon. Check your connection and try again.",
        );
      }
    }

    getImages();
  }, []);

  // Shuffles the images and tracks the score.
  const handleOnClick = (id) => {
    setCardsInfo(shuffleCards(cardsInfo));

    if (clickedIds.includes(id)) {
      setClickedIds([]);
      return;
    }

    const updatedClickedIds = [...clickedIds, id];
    setClickedIds(updatedClickedIds);

    if (updatedClickedIds.length > bestScore) {
      setBestScore(updatedClickedIds.length);
    }
  };

  return (
    <>
      <Header score={clickedIds.length} bestScore={bestScore} />
      {error ? (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try again</button>
        </div>
      ) : (
        <CardsGrid cardsInfo={cardsInfo} handleOnClick={handleOnClick} />
      )}
    </>
  );
}

export default App;
