export const arrayShuffle = arr => {
  const copiedArray = [...arr];
  const result = [];

  while (copiedArray.length !== 0) {
    const randomIndex = Math.floor(Math.random() * copiedArray.length);
    const value = copiedArray.splice(randomIndex, 1);
    result.push(...value);
  }

  return result;
};
