export const shuffleArray = (array) => {
  let index = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (index != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * index);
    index--;

    // And swap it with the current element.
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }

  return array;
};
