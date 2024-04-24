import {
  ChangeEvent,
  useState,
  useCallback,
  FocusEvent,
  useRef,
  useEffect,
} from "react";
import { CARD_NUMBER_KEYS } from "@/constants/cardInfo";
import { ERRORS } from "@/constants/messages";
import { hasFourDigit } from "@/utils/validators";
import { isAllDone } from "@/utils/input";

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

  const [nextInput, setShowNextInput] = useState<boolean>(false);
  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const fourthRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAllDone(cardNumbers.data)) {
      setShowNextInput(true);
    }
  }, [cardNumbers.data]);

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

      setCardNumbers((cardNumbers) => ({
        ...cardNumbers,
        data: {
          ...cardNumbers.data,
          [name]: { value, isError: false, isDone: value.length === 4 },
        },
        status: {
          isError: false,
          showNextInput: false,
          errorMessage: "",
        },
      }));

      if (value.length === 4) {
        if (name === "first") secondRef.current?.focus();
        else if (name === "second") thirdRef.current?.focus();
        else if (name === "third") fourthRef.current?.focus();
      }
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
    },
    [cardNumbers]
  );

  return {
    cardNumbers,
    nextInput,
    changeCardNumbers,
    blurCardNumbers,
    refs: { firstRef, secondRef, thirdRef, fourthRef },
  };
};

export default useCardNumbers;
