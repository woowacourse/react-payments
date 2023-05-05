export const getLocalStorage = (key: string) => {
  const storedCards = localStorage.getItem(key) || '';

  try {
    return JSON.parse(storedCards);
  } catch (error) {
    console.error('파싱 오류', error);
    return [];
  }
};

export const setLocalStorage = (key: string, value: object) => {
  const storedCards = getLocalStorage(key);
  storedCards.push(value);

  localStorage.setItem(key, JSON.stringify(storedCards));
};
