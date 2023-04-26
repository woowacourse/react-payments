import { createContext } from "react";

interface CompleteFlagsValue {
  isCardNumberCompleted: boolean;
  isExpiryDateCompleted: boolean;
  isCVCCompleted: boolean;
  isPasswordCompleted: boolean;
}

interface ValidFlagVlaue {
  isCardNumbersValid: boolean;
  isExpiryDateValid: boolean;
}

interface SubmitManageContextValue {
  isInputsCompleted: CompleteFlagsValue;
  setIsInputsCompleted: React.Dispatch<CompleteFlagsValue>;
  isInputsValid: ValidFlagVlaue;
  setIsInputsValid: React.Dispatch<ValidFlagVlaue>;
}

const defaultValue = {
  isInputsCompleted: {
    isCardNumberCompleted: false,
    isExpiryDateCompleted: false,
    isCVCCompleted: false,
    isPasswordCompleted: false,
  },
  setIsInputsCompleted: () => {},
  isInputsValid: {
    isCardNumbersValid: true,
    isExpiryDateValid: true,
  },
  setIsInputsValid: () => {},
};

export const SubmitManageContext = createContext<SubmitManageContextValue>(defaultValue);
