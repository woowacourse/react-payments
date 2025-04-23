import { useState } from "react";
import type { CardInputProps } from "../types/CardInputTypes";
import useErrorMessages from "./useErrorMessages";
import {
  getCardNumberErrorMessage,
  getCardExpirationMMErrorMessage,
  getCardExpirationYYErrorMessage,
  getCardCVCErrorMessage,
  getCardPasswordErrorMessage,
} from "../validation/getCardErrorMessages";

const useCardInputs = () => {
  const [cardInput, setCardInput] = useState<CardInputProps>({
    first: null,
    second: null,
    third: null,
    fourth: null,
    MM: null,
    YY: null,
    CVC: null,
    password: null,
  });
  const [isError, setIsError] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    MM: false,
    YY: false,
    CVC: false,
    password: false,
  });
  const { errorMessages, handleErrorMessages } = useErrorMessages();

  const handleCardInput = (inputKey: keyof CardInputProps, value: string) => {
    if (!validateCardInputs(inputKey, value)) return;

    handleErrorMessages(inputKey, "");
    setIsError({
      first: false,
      second: false,
      third: false,
      fourth: false,
      MM: false,
      YY: false,
      CVC: false,
      password: false,
    });
    setCardInput((prev: CardInputProps) => ({
      ...prev,
      [inputKey]: value,
    }));
  };

  const validateCardInputs = (
    inputKey: keyof CardInputProps,
    value: string
  ) => {
    const errorMessage = matchingErrorMessageFunc[inputKey](value);
    if (errorMessage && errorMessage.length > 0) {
      handleErrorMessages(inputKey, errorMessage);
      setIsError((prev) => ({
        ...prev,
        [inputKey]: true,
      }));

      return false;
    }

    return true;
  };

  const matchingErrorMessageFunc = {
    first: getCardNumberErrorMessage,
    second: getCardNumberErrorMessage,
    third: getCardNumberErrorMessage,
    fourth: getCardNumberErrorMessage,
    MM: getCardExpirationMMErrorMessage,
    YY: getCardExpirationYYErrorMessage,
    CVC: getCardCVCErrorMessage,
    password: getCardPasswordErrorMessage,
  };

  return { cardInput, handleCardInput, isError, errorMessages };
};

export default useCardInputs;
