import { useState, useEffect } from "react";
import Header from "./components/header";
import CardsGrid from "./components/CardsGrid";
import fetchCards from "./utils/fetchCards";
import "./App.css";

function App() {
  const pokemonIds = [
    25, 6, 1, 7, 133, 150, 151, 94, 143, 448, 130, 149, 39, 54, 658, 282, 59,
    131,
  ];

  const [cardsInfo, setCardsInfo] = useState([]);

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

  return (
    <>
      <Header score={0} bestScore={0} />
      <CardsGrid cardsInfo={cardsInfo} />
    </>
  );
}

export default App;
