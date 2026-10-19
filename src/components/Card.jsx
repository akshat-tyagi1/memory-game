function Card({ name, image, id, handleOnClick }) {
  return (
    <div className="card" key={id} onClick={() => handleOnClick(id)}>
      <img src={image} alt={name} />
      <p className="poke-name">{name}</p>
    </div>
  );
}

export default Card;
