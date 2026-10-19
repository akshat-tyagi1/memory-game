function Card({ name, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <p className="poke-name">{name}</p>
    </div>
  );
}

export default Card; 
