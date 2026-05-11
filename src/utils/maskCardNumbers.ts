export function maskCardNumbers(cardNumbers: string[]): string[] {
  return cardNumbers.map((cardNumber, index) => {
    if (index < 2) {
      return cardNumber;
    }

    return '·'.repeat(cardNumber.length);
  });
}

export function maskSpecialCardNumbers(cardNumbers: string[]): string[] {
  const maskedCardNumbers = [];
  maskedCardNumbers.push(cardNumbers[0]);
  maskedCardNumbers.push('·'.repeat(6));
  maskedCardNumbers.push(cardNumbers[2].slice(-2) + cardNumbers[3]);
  return maskedCardNumbers;
}
