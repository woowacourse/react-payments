export const getLocalStorage = (key: string) => {
  try {
    const getCards = localStorage.getItem(key);
    const cardInfoObject = JSON.parse(getCards as string);

    if (getCards) {
      return cardInfoObject;
    } else if (getCards === null) {
      throw new Error('값을 불러올 수 없습니다.');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setLocalStorage = (key: string, value: object) => {
  localStorage.setItem(key, JSON.stringify(value));
};
