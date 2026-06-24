function shuffleArray(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = result[i];
    result[i] = result[j];
    result[j] = tmp;
  }
  return result;
}

function drawCards(count) {
  const shuffled = shuffleArray(TAROT_CARDS);
  const drawn = shuffled.slice(0, count);
  return drawn.map(function (card) {
    return {
      card: card,
      isReversed: Math.random() < 0.5
    };
  });
}
