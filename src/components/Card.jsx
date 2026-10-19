function Card({ name, image, id }) {
  return (
    <div className="card" key={id}>
      <img src={image} alt={name} />
      <p className="poke-name">{name}</p>
    </div>
  );
}

export default Card; 
