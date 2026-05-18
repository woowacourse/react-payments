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
  maskedCardNumbers.push('·'.repeat(cardNumbers[1].length + cardNumbers[2].slice(0, 2).length));
  maskedCardNumbers.push(cardNumbers[2].slice(2, 4) + cardNumbers[3]);
  return maskedCardNumbers;
}

export function maskFetchCardNumbers(cardNumbers: string): string {
  let maskCardNumbers = '';
  maskCardNumbers = maskCardNumbers + cardNumbers.slice(0, 6) + ' ';
  maskCardNumbers = maskCardNumbers + '*'.repeat(6) + ' ';
  maskCardNumbers = maskCardNumbers + cardNumbers.slice(12);
  return maskCardNumbers;
}
