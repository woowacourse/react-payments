import { createContext } from "react";

import { ValidFlagType, CompleteFlagsType } from "../types/input";

interface SubmitManageContextValue {
  isInputsCompleted: CompleteFlagsType;
  isInputsValid: ValidFlagType;

  setIsNumbersCompleted: (flag: boolean) => void;
  setExpriyDateCompleted: (flag: boolean) => void;
  setIsCVCCompleted: (flag: boolean) => void;
  setIsPassWordCompleted: (flag: boolean) => void;

  setIsNumbersValid: (flag: boolean) => void;
  setIsExpiryDateValid: (flag: boolean) => void;
}

const defaultValue = {
  isInputsCompleted: {
    isCardNumberCompleted: false,
    isExpiryDateCompleted: false,
    isCVCCompleted: false,
    isPasswordCompleted: false,
  },

  isInputsValid: {
    isCardNumbersValid: true,
    isExpiryDateValid: true,
  },

  setIsNumbersCompleted: () => {},
  setExpriyDateCompleted: () => {},
  setIsCVCCompleted: () => {},
  setIsPassWordCompleted: () => {},

  setIsNumbersValid: () => {},
  setIsExpiryDateValid: () => {},
};

export const SubmitManageContext = createContext<SubmitManageContextValue>(defaultValue);
