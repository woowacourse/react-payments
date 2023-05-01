import { CARD_NUMBER_INPUT_MAX_LENGTH } from "../constants";
import { PasswordFormat } from "../types";

const validateCardNumber = (input: string) => {
  return input.length === CARD_NUMBER_INPUT_MAX_LENGTH;
};

const validateExpirationDate = (input: string) => {
  const [month, year] = input.split("/");

  if (!year) return false;
  if (month.length !== 2 || year.length !== 2) return false;

  const date = new Date();
  const currentMonth = (date.getMonth() + 1).toString().padStart(2, "0");
  const currentYear = date.getFullYear() % 100;

  if (month < currentMonth || Number(month) > 12) return false;
  if (Number(year) < currentYear || Number(year) > Number(currentYear) + 5)
    return false;

  return true;
};

const validateOwnerName = (input: string) => {
  return /^\s*[A-Za-z\s]*\s*$/.test(input);
};

const validateSecurityCode = (input: string) => {
  return input.length >= 3 && input.length <= 4;
};

const validatePassword = (passwordInputs: PasswordFormat) => {
  return passwordInputs.every((password) => password.length === 1);
};

const validator = {
  cardNumber: validateCardNumber,
  expirationDate: validateExpirationDate,
  ownerName: validateOwnerName,
  securityCode: validateSecurityCode,
  password: validatePassword,
};

export default validator;
