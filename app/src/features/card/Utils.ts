import { type CardNumber } from "./types";

export function sanitizeErrors(messages: string[]) {
  return [...new Set(messages.filter((item: string) => item !== ""))];
}

export function joinCardNumber(cardNumber: CardNumber) {
  return Object.values(cardNumber).join("");
}

export const runValidation = (validators: (() => void)[]) => {
  try {
    validators.forEach((validate) => {
      validate();
    });
    return { state: false, message: "" };
  } catch (err) {
    return { state: true, message: (err as Error).message };
  }
};
