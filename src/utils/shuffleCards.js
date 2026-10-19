function shuffleCards(cardsInfo) {
  const cardsCopy = [...cardsInfo];

  // Fisher–Yates shuffle algorithm
  for (let i = cardsCopy.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [cardsCopy[i], cardsCopy[random]] = [cardsCopy[random], cardsCopy[i]];
  }

  return cardsCopy;
}

export default shuffleCards;
