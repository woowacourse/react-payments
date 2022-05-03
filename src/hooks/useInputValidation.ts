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

      setValidation(createValidation(true, "Success!"));
    } catch (e) {
      setValidation(createValidation(false, e.message));
    }
  };

  const createValidation = (isValid: boolean, message: string): InputValidation => {
    return { isValid, message };
  };

  return { inputValidation, validateInput };
};

export default useInputValidation;
