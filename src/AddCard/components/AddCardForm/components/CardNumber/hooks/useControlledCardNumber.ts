import { useCallback, useState } from "react";
import { isNumericNaN } from "@/utils/isNumericNaN";
import type { CardNumberInputKey, CardNumberState } from "../types";
import { CARD_NUMBER_LENGTH, INITIAL_CARD_NUMBER_STATE } from "../constants";
import { validateCardNumber } from "../validation";

const useControlledCardNumber = () => {
  const [cardNumberState, setCardNumberState] = useState<CardNumberState>(
    INITIAL_CARD_NUMBER_STATE
  );

  const handleCardNumberChange = useCallback(
    (key: CardNumberInputKey, value: string) => {
      if (value.length > CARD_NUMBER_LENGTH) {
        return;
      }

      const numeric = Number(value);
      const errorMessage = validateCardNumber(value);
      setCardNumberState((prev) => ({
        ...prev,
        [key]: {
          value: isNumericNaN(numeric) ? prev[key].value : value,
          errorMessage,
        },
      }));
    },
    []
  );

  return { cardNumberState, handleCardNumberChange };
};

export default useControlledCardNumber;
