export const getCardImageSrc = (cardNumber = '') => {
  const first = cardNumber[0];
  const second = Number(cardNumber[1]);

  if (first === '4') return './Visa.svg';
  if (first === '5' && second >= 1 && second <= 5) return './Mastercard.svg';
  return '';
};
