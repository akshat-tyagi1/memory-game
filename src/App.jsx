import { useState, useEffect } from "react";
import Header from "./components/header";
import CardsGrid from "./components/CardsGrid";
import "./App.css";

function App() {
  const pokemonIds = [
    25, 6, 1, 7, 133, 150, 151, 94, 143, 448, 130, 149, 39, 54, 658, 282, 59,
    131,
  ];

  const [cardsInfo, setCardsInfo] = useState([]);

  useEffect(() => {
    async function getImages() {
      const temp = [];

      for (const id of pokemonIds) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        let name = data.name;
        name = name.slice(0, 1).toUpperCase() + name.slice(1);
        const image = data.sprites.other["official-artwork"].front_default;

        temp.push([name, image, crypto.randomUUID()]);
      }

      setCardsInfo(temp);
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
