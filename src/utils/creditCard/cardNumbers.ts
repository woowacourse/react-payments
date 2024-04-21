export const isCompleteCardNumber = (cardNumber: string) => cardNumber.length === 4;

export const isCompleteCardNumbers = (cardNumbers: string[]) => cardNumbers.join('').length === 16;
