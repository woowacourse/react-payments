import { useState } from "react";

export type InputValidation = { isValid: boolean; message: string | null };

const useInputValidation = (initialBoolean: boolean) => {
  const [inputValidation, setValidation] = useState<InputValidation>({
    isValid: initialBoolean,
    message: null,
  });

  const validateInput = (target, checkTarget: (target) => void) => {
    try {
      checkTarget(target);

      setValidation(() => formatInputValidation(true, "Success!"));
    } catch (e) {
      setValidation(() => formatInputValidation(false, e.message));
    }
  };

  const isValidInput = (target, checkTarget: (target) => void) => {
    try {
      checkTarget(target);

      return true;
    } catch (e) {
      return false;
    }
  };

  const formatInputValidation = (isValid: boolean, message: string): InputValidation => {
    return { isValid, message };
  };

  return { inputValidation, validateInput, isValidInput };
};

export default useInputValidation;
