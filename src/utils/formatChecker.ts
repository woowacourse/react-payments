const checkNumberFormat = (input: string) => {
  return /^\d*$/.test(input);
};

const checkEnglishFormat = (input: string) => {
  return /^[a-zA-Z ]*$/.test(input);
};

const checkExpirationDateFormat = (input: string) => {
  return /^(?:\d{0,2}\/?\d{0,2})?$/.test(input);
};

export { checkNumberFormat, checkEnglishFormat, checkExpirationDateFormat };
