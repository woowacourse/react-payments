const CompleteValidation = {
  cardNumbers: (cardNumbers: Record<string, string>) => {
    const { cardNumber1, cardNumber2, cardNumber3, cardNumber4 } = cardNumbers;

    if (!cardNumber4) return false;
    if (
      cardNumber1.length !== 4 ||
      cardNumber2.length !== 4 ||
      cardNumber3.length !== 4 ||
      cardNumber4.length !== 4
    ) {
      return false;
    }
    return true;
  },
  expiryDate: (expiryDate: Record<string, string>) => {
    const { month, year } = expiryDate;

    if (!month || !year) return false;
    if (month.length !== 2 || year.length !== 2) {
      return false;
    }
    return true;
  },
};

export default CompleteValidation;
