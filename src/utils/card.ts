import { CARDNUMBERS_REGEX, DEFAULT_EXPRIYDATE } from "../constants";

export const getShownNumbers = (numbers: string): string => {
  const shownNumbers = numbers.slice(0, 8);
  return (shownNumbers.match(new RegExp(CARDNUMBERS_REGEX)) ?? []).join(" ");
};

export const gethiddenNumbers = (numbers: string): string => {
  const hiddenNumbers = "●".repeat(numbers.slice(8).length);
  return (hiddenNumbers.match(new RegExp(CARDNUMBERS_REGEX)) ?? []).join(" ");
};

export const normalizeExpiryDate = (expiryDate: string) => {
  return expiryDate ? expiryDate : DEFAULT_EXPRIYDATE;
};

export const getUINumbers = (numbers: string): string => {
  const hiddenNumbers = `${numbers.slice(0, 8)}${"●".repeat(numbers.slice(8).length)}`;
  return (hiddenNumbers.match(new RegExp(CARDNUMBERS_REGEX)) ?? []).join(" - ");
};

export const deleteLastNumber = (numbers: string): string => {
  if (numbers.length > 12) {
    return numbers.slice(0, 12);
  }

  if (numbers.length > 8) {
    return numbers.slice(0, 8);
  }

  return numbers.slice(0, -1);
};
