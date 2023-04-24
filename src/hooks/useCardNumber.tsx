const useCardNumber = (cardNumber: string[]) => {
  return cardNumber.map((numberFraction, index) => {
    if (!numberFraction.length) {
      return '';
    }

    if (index < 2) {
      return numberFraction;
    }

    return '•'.repeat(numberFraction.length);
  });
};

export default useCardNumber;
