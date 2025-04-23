import { useCallback, useRef, useState } from "react";
import { isNaN } from "@/utils/isNaN";
import type { CardNumberInputKey, CardNumberState } from "../types";
import {
  CARD_NUMBER_INPUT_KEYS,
  INITIAL_CARD_NUMBER_STATE,
} from "../constants";

const useControlledCardNumber = () => {
  const [cardNumberState, setCardNumberState] = useState<CardNumberState>(
    INITIAL_CARD_NUMBER_STATE
  );
  const cardNumberInputRefs = {
    first: useRef<HTMLInputElement>(null),
    second: useRef<HTMLInputElement>(null),
    third: useRef<HTMLInputElement>(null),
    fourth: useRef<HTMLInputElement>(null),
  };

  const handleNextInputFocus = (
    key: CardNumberInputKey,
    value: string,
    isValid: boolean
  ) => {
    if (value.length !== 4 || isValid || key === "fourth") {
      return;
    }

    const index = CARD_NUMBER_INPUT_KEYS.indexOf(key);
    const nextKey = CARD_NUMBER_INPUT_KEYS[index + 1] as CardNumberInputKey;
    const nextInputRef = cardNumberInputRefs[nextKey];
    if (nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };

  const handleCardNumberChange = useCallback(
    (key: CardNumberInputKey, value: string) => {
      if (value.length > 4) {
        return;
      }

      const isValidLength = value.length === 0 || value.length === 4;
      const isValid = isNaN(Number(value)) || !isValidLength;
      setCardNumberState((prevState) => ({
        ...prevState,
        [key]: {
          value,
          isError: isValid,
        },
      }));
      handleNextInputFocus(key, value, isValid);
    },
    []
  );

  const checkCardNumberNextStep = useCallback(
    (cardNumberState: CardNumberState) => {
      const cardNumberValues = Object.values(cardNumberState);

      const isError = cardNumberValues.some(({ isError }) => isError);
      if (isError) {
        return false;
      }

      const isAllFilledCardNumber = cardNumberValues.every(
        ({ value }) => value.length === 4
      );
      if (!isAllFilledCardNumber) {
        return false;
      }

      return true;
    },
    []
  );

  return {
    cardNumberState,
    cardNumberInputRefs,
    handleCardNumberChange,
    isCardNumberNextStep: checkCardNumberNextStep(cardNumberState),
  };
};

export default useControlledCardNumber;
