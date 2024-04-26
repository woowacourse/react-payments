import { ValidatorType } from "./changeValidator";

export const cardNumberBlurValidator: ValidatorType = (input) => {
  console.log("numbers blur");
  return { isValid: true, value: input };
};

export const cardPeriodBlurValidator: ValidatorType = (input) => {
  console.log("period blur");
  return { isValid: true, value: input };
};

export const cardPasswordBlurValidator: ValidatorType = (input) => {
  console.log("pass blur");
  return { isValid: true, value: input };
};

export const cardOwnerBlurValidator: ValidatorType = (input) => {
  console.log("owner blur");
  return { isValid: true, value: input };
};

export const cardCVCBlurValidator: ValidatorType = (input) => {
  console.log("cvc blur");
  return { isValid: true, value: input };
};
