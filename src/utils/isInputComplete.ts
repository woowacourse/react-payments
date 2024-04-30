import { CreditCardSpecificValue } from "../@types/CreditCard";
import Validator from "./Validator";

const isInputComplete = (...args: (CreditCardSpecificValue | boolean)[]): boolean[] => {
  return args.map((arg) => {
    if (typeof arg === "boolean") return arg;
    return Validator.inputCreditCardIsComplete(arg);
  });
};

export default isInputComplete;
