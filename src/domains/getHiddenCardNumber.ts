const getHiddenCardNumber = (cardNumber: string) => {
  return cardNumber.slice(0, 9) + cardNumber.slice(9).replace(/[^-]/g, '∘');
};

export { getHiddenCardNumber };
