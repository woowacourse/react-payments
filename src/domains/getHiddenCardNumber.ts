const getHiddenCardNumber = (cardNumber: string) => {
  const hiddenCardNumber = cardNumber.slice(0, 9) + cardNumber.slice(9).replace(/[^-]/g, '∘');

  return hiddenCardNumber;
};

export { getHiddenCardNumber };
