import { useCallback, useState } from "react";
import { isNaN } from "../utils/isNaN";
import {
  type CardNumberInputKey,
  type CardNumberState,
  INITIAL_CARD_NUMBER_STATE,
} from "../constants/card";

const useControlledCardNumber = () => {
  const [cardNumberState, setCardNumberState] = useState<CardNumberState>(
    () => INITIAL_CARD_NUMBER_STATE
  );

  const handleCardNumberChange = useCallback(
    (key: CardNumberInputKey, value: string) => {
      if (value.length > 4) {
        return;
      }

      const isValid = isNaN(Number(value)) || value.length !== 4;
      setCardNumberState((prevState) => ({
        ...prevState,
        [key]: {
          value,
          isError: isValid,
        },
      }));
    },
    []
  );

  return { cardNumberState, handleCardNumberChange };
};

export default useControlledCardNumber;
