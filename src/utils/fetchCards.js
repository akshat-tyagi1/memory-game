async function fetchCards(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon with ID ${id}`);
  }

  const data = await response.json();

  let name = data.name;
  name = name.slice(0, 1).toUpperCase() + name.slice(1);
  const image = data.sprites.other["official-artwork"].front_default;

  return [name, image, crypto.randomUUID()];
}

export default fetchCards;
