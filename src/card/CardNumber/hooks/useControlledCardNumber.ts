import { RefObject, useCallback, useRef, useState } from "react";
import { isNaN } from "@/utils/isNaN";
import type { CardNumberInputKey, CardNumberState } from "../types";
import {
  CARD_NUMBER_INPUT_KEYS,
  INITIAL_CARD_NUMBER_STATE,
} from "../constants";
import { handleNextInputFocus } from "@/utils/handleNextInputFocus";

export interface ControlledCardNumber {
  cardNumberState: CardNumberState;
  cardNumberInputRefs: {
    first: RefObject<HTMLInputElement | null>;
    second: RefObject<HTMLInputElement | null>;
    third: RefObject<HTMLInputElement | null>;
    fourth: RefObject<HTMLInputElement | null>;
  };
  handleCardNumberChange: (key: CardNumberInputKey, value: string) => void;
  isNextStep: boolean;
}

const useControlledCardNumber = (): ControlledCardNumber => {
  const [cardNumberState, setCardNumberState] = useState<CardNumberState>(
    INITIAL_CARD_NUMBER_STATE
  );
  const cardNumberInputRefs = {
    first: useRef<HTMLInputElement>(null),
    second: useRef<HTMLInputElement>(null),
    third: useRef<HTMLInputElement>(null),
    fourth: useRef<HTMLInputElement>(null),
  };

  const handleCardNumberChange = useCallback(
    (key: CardNumberInputKey, value: string) => {
      if (value.length > 4) {
        return;
      }

      const isInvalidLength = value.length === 0 || value.length === 4;
      const isValid = isNaN(Number(value)) || !isInvalidLength;
      setCardNumberState((prevState) => ({
        ...prevState,
        [key]: {
          value,
          isError: isValid,
        },
      }));

      if (value.length !== 4 || isValid || key === "fourth") {
        return;
      }

      handleNextInputFocus({
        key,
        keys: CARD_NUMBER_INPUT_KEYS,
        refs: cardNumberInputRefs,
      });
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
    isNextStep: checkCardNumberNextStep(cardNumberState),
  };
};

export default useControlledCardNumber;
