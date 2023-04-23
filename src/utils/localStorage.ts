export const getLocalStorage = (key: string) => {
  const storedCards = localStorage.getItem(key);

  return storedCards ? JSON.parse(storedCards) : [];
};

export const setLocalStorage = (key: string, value: object) => {
  const card = getLocalStorage(key);
  card.push(value);

  localStorage.setItem(key, JSON.stringify(card));
};
