import { INPUT_MAX_LENGTH } from './Constants';

export const isInputNumber = (
  inputValue: string,
  maxLength: number = INPUT_MAX_LENGTH.CARD_NUMBER_LENGTH
) => {
  const numberRegex = new RegExp(`^\\d{0,${maxLength}}$`);
  return !numberRegex.test(inputValue);
};

export const isInputEnglish = (inputValue: string) => {
  const englishRegex = /^[a-zA-Z\s]*$/;
  return !englishRegex.test(inputValue);
};

export const isOverLength = (
  inputValue: string,
  maxLength: number = INPUT_MAX_LENGTH.NAME_LENGTH
) => {
  return inputValue.length > maxLength;
};

export const isNextInputFocusable = ({
  inputValue,
  inputIndex,
  maxLength = 4,
}: {
  inputValue: string;
  inputIndex: number;
  maxLength: number;
}) => {
  return inputValue.length > maxLength - 1 && inputIndex < maxLength - 1;
};

export const isValidMonth = (monthValue: string) => {
  return Number(monthValue) <= 12 && Number(monthValue) >= 1;
};
