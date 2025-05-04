import { ERROR_MESSAGES } from '../constants/errorMessages';

export const checkInputValidation = (inputValue: string, validLength: number) => {
  checkNumber(inputValue);
  checkValidLength(inputValue, validLength);
};

export const checkPasswordValidation = (inputValue: string, validLength: number) => {
  checkValidLength(inputValue, validLength);
};

export const checkNumber = (value: string) => {
  if (!Number.isInteger(Number(value))) throw new Error(`${ERROR_MESSAGES.IS_NOT_NUM}`);
};

export const checkValidLength = (value: string, validLength: number) => {
  if (value.length !== validLength)
    throw new Error(`${ERROR_MESSAGES.INVALID_LENGTH(validLength)}`);
};
