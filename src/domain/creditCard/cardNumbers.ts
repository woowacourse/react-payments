export const isFulledCardNumber = (cardNumber: string) => cardNumber.length === 4;

export const isFulledCardNumbers = (cardNumbers: string[]) => cardNumbers.join('').length === 16;

export const isCompletedInputCardNumber = (cardNumbers: string[], isCardNumberError: boolean) => {
  return cardNumbers.length === 4 && !isCardNumberError;
};
