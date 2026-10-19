function shuffleCards(cardsInfo) {
  for (let i = cardsInfo.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [cardsInfo[i], cardsInfo[random]] = [cardsInfo[random], cardsInfo[i]];
  }
}

export default shuffleCards;
