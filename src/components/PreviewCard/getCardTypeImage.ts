const MASTERCARD = {
  START: 51,
  END: 55,
};

type CardImage = './Visa.png' | './Mastercard.png' | null;

const getCardTypeImage = (firstCardInput: string): CardImage => {
  if (firstCardInput[0] === '4') return './Visa.png';

  const cardTypePrefix = Number(firstCardInput.slice(0, 2));
  if (cardTypePrefix >= MASTERCARD.START && cardTypePrefix <= MASTERCARD.END) {
    return './Mastercard.png';
  }
  return null;
};

export default getCardTypeImage;
