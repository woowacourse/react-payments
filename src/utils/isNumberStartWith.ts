const isNumberStartWith = (targetNumber: string, startNumber: string) => {
  const lengthOfStartNumber = startNumber.length;
  return targetNumber.slice(0, lengthOfStartNumber) === startNumber;
};

export default isNumberStartWith;
