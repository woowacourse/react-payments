import { REGULAR_EXPRESSION } from "../CONSTANT";

export const validateCardOwner = (owner: string) => {
  const regExp = REGULAR_EXPRESSION.CAPITAL_LETTER_OR_SPACE;

  return regExp.test(owner);
};
