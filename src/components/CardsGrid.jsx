import Card from "./Card";
import shuffleCards from "../utils/shuffleCards";

function CardsGrid({ cardsInfo, reShuffle }) {
  console.log(cardsInfo);
  const cardsCopy = shuffleCards(cardsInfo);

  return (
    <div className="cards-container">
      {cardsCopy.map((card) => (
        <Card
          name={card[0]}
          image={card[1]}
          key={card[2]}
          reShuffle={reShuffle}
        />
      ))}
    </div>
  );
}

export default CardsGrid;
