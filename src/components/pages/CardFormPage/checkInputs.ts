import type { CardInfoState, CardNumbers, Password } from "types";

const isCorrectCardNumber = (numbers: CardNumbers) =>
  Object.values(numbers).join("").length === 16;

const isCorrectPwd = (password: Password) =>
  Object.values(password).join("").length === 2;

const isRequiredCompleted = ({
  cardCompany,
  cardNumbers,
  cardDate,
  cardCode,
  pwd,
}: CardInfoState) =>
  cardCompany?.name &&
  cardCompany?.hexColor &&
  isCorrectCardNumber(cardNumbers) &&
  cardDate?.month &&
  cardDate?.year &&
  cardCode?.cvc?.length === 3 &&
  isCorrectPwd(pwd);

export { isCorrectCardNumber, isCorrectPwd, isRequiredCompleted };
