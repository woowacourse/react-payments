export const fetchData = (data: any): boolean => {
  const getData = localStorage.getItem('cardList');

  if (getData) {
    const dataToArr = JSON.parse(getData);

    const sameNumbers = dataToArr.filter((card: any) => {
      const { cardNumber } = card;
      const keys = Object.keys(cardNumber);
      let cardNumberSerial = '';
      let fetchCardNumberSerial = '';
      for (const key of keys) {
        cardNumberSerial += cardNumber[key];
        fetchCardNumberSerial += data.cardNumber[key];
      }

      if (cardNumberSerial.includes(fetchCardNumberSerial)) return true;
    });

    if (sameNumbers.length > 0) return false;
    dataToArr.push(data);
    localStorage.setItem('cardList', JSON.stringify(dataToArr));
    return true;
  }

  localStorage.setItem('cardList', JSON.stringify([data]));
  return true;
};
