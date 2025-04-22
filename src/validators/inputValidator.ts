import { ERROR_MESSAGES } from './errorMessages';

export const inputValidation = (e: React.ChangeEvent<HTMLInputElement>, validLength: number) => {
  const inputValue = e.target.value;
  checkNumber(inputValue);
  checkValidLength(inputValue, validLength);
};

export const checkNumber = (value: string) => {
  if (!/^\d+$/.test(value)) throw new Error(`${ERROR_MESSAGES.IS_NOT_NUM}`);
};

export const checkValidLength = (value: string, validLength: number) => {
  if (value.length !== validLength)
    throw new Error(`${ERROR_MESSAGES.INVALID_LENGTH(validLength)}`);
};
