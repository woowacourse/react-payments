import { useCallback, useState } from "react";
import { isNaN } from "../../../../../../utils/isNaN";
import type { CardNumberInputKey, CardNumberState } from "../types";
import { CARD_NUMBER_LENGTH, INITIAL_CARD_NUMBER_STATE } from "../constants";

const useControlledCardNumber = () => {
  const [cardNumberState, setCardNumberState] = useState<CardNumberState>(
    INITIAL_CARD_NUMBER_STATE
  );

  const handleCardNumberChange = useCallback(
    (key: CardNumberInputKey, value: string) => {
      if (value.length > CARD_NUMBER_LENGTH) {
        return;
      }
      if (isNaN(Number(value))) {
        return;
      }

      const isValidLength = value.length === 0 || value.length === 4;
      const isValid = isNaN(Number(value)) || !isValidLength;

      setCardNumberState((prevState) => {
        return {
          ...prevState,
          [key]: {
            value,
            isError: isValid,
          },
        };
      });
    },
    []
  );

  return { cardNumberState, handleCardNumberChange };
};

export default useControlledCardNumber;
