export const getCards = async () => {
  return await fetch('/cards').then((res) => res.json());
};
