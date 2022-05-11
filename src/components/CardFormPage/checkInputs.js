const isCorrectCardNumber = numbers => Object.values(numbers).join('').length === 16;
const isCorrectPwd = password => Object.values(password).join('').length === 2;
const isRequiredCompleted = ({ cardCompany, cardNumbers, cardDate, cardCode, pwd }) =>
  cardCompany?.name &&
  cardCompany?.hexColor &&
  isCorrectCardNumber(cardNumbers) &&
  cardDate?.month &&
  cardDate?.year &&
  cardCode?.cvc?.length === 3 &&
  isCorrectPwd(pwd);

export { isCorrectCardNumber, isCorrectPwd, isRequiredCompleted };
