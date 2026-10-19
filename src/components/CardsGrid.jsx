import Card from "./Card";

function CardsGrid({ cardsInfo, handleOnClick }) {
  return (
    <div className="cards-container">
      {cardsInfo.map((card) => (
        <Card
          name={card[0]}
          image={card[1]}
          id={card[2]}
          key={card[2]}
          handleOnClick={handleOnClick}
        />
      ))}
    </div>
  );
}

export default CardsGrid;
