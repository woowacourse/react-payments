const encryptCardNumber = cardNumber =>
  cardNumber.length > 8
    ? cardNumber.slice(0, 8) + '•'.repeat(cardNumber.length - 8)
    : cardNumber;

export default encryptCardNumber;
