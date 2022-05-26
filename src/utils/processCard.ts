import { CardType } from 'types';

const encryptCardNumber = (cardNumber: CardType['cardNumber']) =>
  cardNumber.length > 8
    ? cardNumber.slice(0, 8) + '•'.repeat(cardNumber.length - 8)
    : cardNumber;

const makeValidDate = (date: CardType['validDate']) => {
  if (!date) return date;

  const [year, month] = date.split('-');

  return `${month}/${year.slice(-2)}`;
};

export { encryptCardNumber, makeValidDate };
