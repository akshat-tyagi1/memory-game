import Card from "./Card";
import shuffleCards from "../utils/shuffleCards";

function CardsGrid({ cardsInfo }) {
  shuffleCards(cardsInfo);
  console.log(cardsInfo);
  
  return (
    <div className="cards-container">
      {cardsInfo.map((card) => (
        <Card name={card[0]} image={card[1]} id={card[2]} />
      ))}
    </div>
  );
}

export default CardsGrid;
