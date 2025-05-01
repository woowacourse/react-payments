function getMaskedCardNumber(cardNumber: string[]) {
  return [
    ...cardNumber.slice(0, 2),
    ...cardNumber.slice(2).map((letter) => '·'.repeat(letter.length)),
  ];
}

export default getMaskedCardNumber;
