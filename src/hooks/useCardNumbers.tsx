import { ChangeEvent, useState, useCallback, FocusEvent } from "react";
import { CARD_NUMBER_KEYS } from "@/constants/cardInfo";
import { ERRORS } from "@/constants/messages";
import { hasFourDigit } from "@/utils/validators";

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState({
    data: {
      first: { value: "", isError: false, isDone: false },
      second: { value: "", isError: false, isDone: false },
      third: { value: "", isError: false, isDone: false },
      fourth: { value: "", isError: false, isDone: false },
    },
    status: {
      isError: false,
      errorMessage: "",
    },
  });

  const changeCardNumbers = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target as {
        name: (typeof CARD_NUMBER_KEYS)[number];
        value: string;
      };
      if (!CARD_NUMBER_KEYS.includes(name)) return;

      if (!Number.isInteger(Number(value))) {
        setCardNumbers({
          ...cardNumbers,
          data: {
            ...cardNumbers.data,
            [name]: {
              value: cardNumbers.data[name].value,
              isError: true,
              isDone: false,
            },
          },
          status: {
            isError: true,
            errorMessage: ERRORS.isNotInteger,
          },
        });
        return;
      }

      setCardNumbers({
        ...cardNumbers,
        data: {
          ...cardNumbers.data,
          [name]: { value, isError: false, isDone: value.length === 4 },
        },
        status: {
          isError: false,
          errorMessage: "",
        },
      });
    },
    [cardNumbers]
  );

  const blurCardNumbers = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      const { name, value } = event.target as {
        name: (typeof CARD_NUMBER_KEYS)[number];
        value: string;
      };
      if (!CARD_NUMBER_KEYS.includes(name)) return;
      if (!hasFourDigit(value)) {
        setCardNumbers({
          ...cardNumbers,
          data: {
            ...cardNumbers.data,
            [name]: { value, isError: true, isDone: false },
          },
          status: {
            isError: true,
            errorMessage: ERRORS.isNotFourDigit,
          },
        });
        return;
      }

      setCardNumbers({
        ...cardNumbers,
        data: {
          ...cardNumbers.data,
          [name]: { value, isError: false, isDone: true },
        },
      });
    },
    [cardNumbers]
  );

  return { cardNumbers, changeCardNumbers, blurCardNumbers };
};

export default useCardNumbers;
