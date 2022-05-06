const encryptCardNumber = cardNumber =>
  cardNumber.length > 8
    ? cardNumber.slice(0, 8) + '•'.repeat(cardNumber.length - 8)
    : cardNumber;

const makeValidDate = date => {
  if (!date) return date;

  const [year, month] = date.split('-');

  return `${month}/${year.slice(-2)}`;
};

const preventBubbling = e => {
  e.stopPropagation();
};

const preventEvent = e => {
  e.preventDefault();
};

export { encryptCardNumber, makeValidDate, preventBubbling, preventEvent };
