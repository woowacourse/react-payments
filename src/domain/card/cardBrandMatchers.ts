// utils
const isNumberInRange = (cardNumber: string, length: number, min: number, max: number) => {
  if (cardNumber.length < length) return false;

  const targetNumber = Number(cardNumber.slice(0, length));
  return targetNumber >= min && targetNumber <= max;
};

// matchers
export const matchVisa = (cardNumber: string) => cardNumber.startsWith('4');

export const matchMasterCard = (cardNumber: string) => isNumberInRange(cardNumber, 2, 51, 55);

export const matchAmex = (cardNumber: string) => cardNumber.startsWith('34') || cardNumber.startsWith('37');

export const matchDiners = (cardNumber: string) => cardNumber.startsWith('36');

export const matchUnionPay = (cardNumber: string) =>
  isNumberInRange(cardNumber, 6, 622126, 622925) ||
  isNumberInRange(cardNumber, 4, 6282, 6288) ||
  isNumberInRange(cardNumber, 3, 624, 626);
