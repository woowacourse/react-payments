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

      const numeric = Number(value);

      if (isNaN(numeric)) {
        setCardNumberState((prev) => ({
          ...prev,
          [key]: {
            ...prev[key],
            isError: true,
          },
        }));
        return;
      }

      // 숫자일 때: 정상 길이인지 검사
      const isValidLength = value.length === 0 || value.length === 4;
      setCardNumberState((prev) => ({
        ...prev,
        [key]: {
          value, // 새로운 숫자값
          isError: !isValidLength,
        },
      }));
    },
    []
  );

  return { cardNumberState, handleCardNumberChange };
};

export default useControlledCardNumber;
