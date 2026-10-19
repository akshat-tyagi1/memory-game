import { useState, useEffect } from "react";
import Header from "./components/header";
import CardsGrid from "./components/CardsGrid";
import fetchCards from "./utils/fetchCards";
import shuffleCards from "./utils/shuffleCards";
import "./App.css";

function App() {
  const [cardsInfo, setCardsInfo] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);

  const pokemonIds = [
    25, 6, 1, 7, 133, 150, 151, 94, 143, 448, 130, 149, 39, 54, 658, 282, 59,
    131,
  ];

  useEffect(() => {
    async function getImages() {
      try {
        const temp = await Promise.all(pokemonIds.map((id) => fetchCards(id)));

        setCardsInfo(temp);
      } catch (error) {
        console.error("Failed to load Pokémon cards:", error);
      }
    }

    getImages();
  }, []);

  const handleOnClick = (id) => {
    const shuffledCopy = shuffleCards(cardsInfo);
    setCardsInfo(shuffledCopy);

    if (clickedIds.includes(id)) {
      setClickedIds([]);
      setScore(0);

      if (score > bestScore) {
        setBestScore(score);
      }
      
    } else {
      setClickedIds([...clickedIds, id]);
      setScore((prev) => prev + 1);
    }
  };

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <CardsGrid cardsInfo={cardsInfo} handleOnClick={handleOnClick} />
    </>
  );
}

export default App;
