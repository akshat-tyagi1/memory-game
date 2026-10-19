import Card from "./Card";

function CardsGrid({ cardsInfo }) {
  console.log(cardsInfo);
  return (
    <div className="cards-container">
      {cardsInfo.map((card) => (
        <Card name={card[0]} image={card[1]} />
      ))}
    </div>
  );
}

export default CardsGrid;
