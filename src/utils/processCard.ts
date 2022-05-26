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

const makeCardOwnerName = (name: CardType['cardOwnerName']) =>
  name.length > 10 ? `${name.slice(0, 10)}...` : name;

export { encryptCardNumber, makeValidDate, makeCardOwnerName };
