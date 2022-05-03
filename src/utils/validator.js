const isEmptyValue = requiredList => {
  requiredList.every(value => value !== '');
};

const isValidCardInputs = (
  cardNumber,
  validDate,
  CVC,
  firstPassword,
  secondPassword
) => {
  if (
    isEmptyValue([cardNumber, validDate, CVC, firstPassword, secondPassword])
  ) {
    throw new Error();
  }

  const month = validDate.split('/')[0];
  if (month < 1 || month > 12) {
    throw new Error();
  }
};

export default isValidCardInputs;
