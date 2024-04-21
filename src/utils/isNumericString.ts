const isNumericString = (inputValue: string) => {
  const regex = /^(\d+)?$/;
  return regex.test(inputValue);
};

export default isNumericString;
