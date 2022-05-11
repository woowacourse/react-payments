export const getCardInfos = () => {
  return JSON.parse(localStorage.getItem('cardInfos')) ?? {};
};

export const setCardInfos = (value) => {
  const storedCardInfos = getCardInfos();
  localStorage.setItem(
    'cardInfos',
    JSON.stringify({ ...storedCardInfos, ...value })
  );
};

export const deleteCardInfos = (id) => {
  const storedCardInfos = getCardInfos();
  delete storedCardInfos[id];

  localStorage.setItem('cardInfos', JSON.stringify(storedCardInfos));
};
