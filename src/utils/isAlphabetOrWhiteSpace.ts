const isAlphabetOrWhiteSpace = (inputValue: string) => {
  const regex = /^[a-zA-Z\s]*$/;
  return regex.test(inputValue);
};

export default isAlphabetOrWhiteSpace;
