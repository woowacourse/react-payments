const formatCardDisplayNumber = (cardNumber: string[], indexList: number[]) => {
  return cardNumber.map((value: string, index: number) => {
    if (indexList.includes(index)) {
      return '*'.repeat(value.length);
    }
    return value;
  });
};

export default formatCardDisplayNumber;
