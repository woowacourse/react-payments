import { useCallback, useState } from "react";
import type {
  CardFormData,
  CardFormValidation,
  ValidatorArgs,
} from "../../types";
import validator from "../../utils/validator";

const initialValidationValue: CardFormValidation = {
  issuer: false,
  cardNumber: false,
  expirationDate: false,
  ownerName: true,
  securityCode: false,
  password: false,
};

const initialErrorValue: CardFormValidation = {
  issuer: false,
  cardNumber: false,
  expirationDate: false,
  ownerName: false,
  securityCode: false,
  password: false,
};

const useCardInputValidation = () => {
  const [inputValidation, setInputValidation] = useState(
    initialValidationValue
  );
  const [inputError, setInputError] = useState(initialErrorValue);

  const validateInput = useCallback(
    <K extends keyof CardFormValidation>(key: K, value: CardFormData[K]) => {
      const isValid = validator[key](value as ValidatorArgs[K]);

      return isValid as ReturnType<(typeof validator)[K]>;
    },
    []
  );

  const updateInputValidation = useCallback(
    <K extends keyof CardFormValidation>(key: K, value: CardFormData[K]) => {
      const isValid = validateInput(key, value);
      setInputValidation((prevInputValidation) => ({
        ...prevInputValidation,
        [key]: isValid,
      }));

      if (isValid)
        setInputError((prevInputError) => ({
          ...prevInputError,
          [key]: !isValid,
        }));
    },
    [validateInput]
  );

  const updateInputError = useCallback(
    <K extends keyof CardFormValidation>(key: K, value: CardFormData[K]) => {
      const isValid = validateInput(key, value);
      setInputError((prevInputError) => ({
        ...prevInputError,
        [key]: !isValid,
      }));
    },
    [validateInput]
  );

  const triggerAllInputErrors = useCallback(() => {
    setInputError((prevInputError) => {
      const updatedInputError = Object.keys(prevInputError).reduce(
        (acc, key) => ({
          ...acc,
          [key]: !inputValidation[key as keyof typeof inputValidation],
        }),
        {}
      ) as CardFormValidation;

      return updatedInputError;
    });
  }, [inputValidation]);

  return {
    inputValidation,
    inputError,
    updateInputValidation,
    updateInputError,
    triggerAllInputErrors,
  };
};

export { useCardInputValidation };
