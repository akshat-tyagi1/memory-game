function Card({ name, image, id, reShuffle }) {
  return (
    <div className="card" key={id} onClick={reShuffle}>
      <img src={image} alt={name} />
      <p className="poke-name">{name}</p>
    </div>
  );
}

export default Card;
