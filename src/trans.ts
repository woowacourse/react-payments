import { validateNumber } from "./validation/number";

export const makeAppropriateNumber = (userInput: string) => {
  if (userInput === "") return "";

  return userInput.split("").filter(validateNumber).join("");
};

export const makeAppropriateExpirationDate = (userInput: string) => {
  if (userInput === "") return "";

  const result = userInput
    .split("")
    .filter(validateNumber)
    .slice(0, 4)
    .join("");

  return result.length >= 3
    ? result.slice(0, 2) + "/" + result.slice(2)
    : result;
};
