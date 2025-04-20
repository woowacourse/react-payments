import { ERROR_MESSAGES } from '../constants/errorMessages';

export const checkInputValidation = (
  e: React.ChangeEvent<HTMLInputElement>,
  validLength: number
) => {
  const inputValue = e.target.value;
  checkNumber(inputValue);
  checkValidLength(inputValue, validLength);
};

export const checkNumber = (value: string) => {
  if (!Number.isInteger(Number(value))) throw new Error(`${ERROR_MESSAGES.IS_NOT_NUM}`);
};

export const checkValidLength = (value: string, validLength: number) => {
  if (value.length !== validLength)
    throw new Error(`${ERROR_MESSAGES.INVALID_LENGTH(validLength)}`);
};
