import { CardNumber } from "../types";

export const isNumeric = (value: string) => {
  const allowOnlyNumber = /^[0-9]*$/;

  return allowOnlyNumber.test(value);
};

export const isValidMonth = (value: string) => {
  if (!isNumeric(value)) return;

  const number = Number(value);

  return 1 <= number && number <= 12;
};

export const isValidOwnerName = (value: string) => {
  const allowAlphabetAndBlank = /^[A-Za-z\s]*$/;
  const regexStartsWithSpace = /^\s/;
  const regexDuplicateSpaces = /\s{2,}/g;

  const isValid =
    (allowAlphabetAndBlank.test(value) || regexDuplicateSpaces.test(value)) && !regexStartsWithSpace.test(value);

  return isValid;
};

export const isValidCardName = (value: string) => {
  const allowStringAndBlank = /^[A-Za-zㄱ-힣\s]*$/;
  const regexStartsWithSpace = /^\s/;
  const regexDuplicateSpaces = /\s{2,}/g;

  const isValid =
    (allowStringAndBlank.test(value) || regexDuplicateSpaces.test(value)) && !regexStartsWithSpace.test(value);

  return isValid;
};

export const isEndsWithSpace = (value: string) => {
  const regexEndsWithSpace = /\s$/;

  return regexEndsWithSpace.test(value);
};

export const isFulfilledObject = (obj: Record<string, string>, length: number) => {
  return Object.values(obj).every((value) => value.length === length);
};

export const isFulfilledString = (value: string, length: number) => {
  return value.length === length;
};

export const isTheOtherGroupFulfilled = (cardNumber: CardNumber, name: string): boolean => {
  const keys = Object.keys(cardNumber).filter((key) => key !== name) as (keyof CardNumber)[];

  return keys.every((key) => cardNumber[key].length === 4);
};

export const hasInvalidKey = (cardNumber: CardNumber) => {
  const keys = Object.keys(cardNumber) as (keyof CardNumber)[];

  return keys.some((key) => cardNumber[key].length !== 0 && cardNumber[key].length !== 4);
};
