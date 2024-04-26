import { ChangeEvent, useState, FocusEvent, useRef, useEffect } from "react";
import { CARD_NUMBER_KEYS } from "@/constants/cardInfo";
import { ERRORS } from "@/constants/messages";
import { isAllDone } from "@/utils/input";
import useInput from "./useInput";
import { getInputAttributes } from "@/utils/input";

const useCardNumbers = () => {
  const [first, setFirst] = useInput();
  const [second, setSecond] = useInput();
  const [third, setThird] = useInput();
  const [fourth, setFourth] = useInput();
  const [errorMessage, setErrorMessage] = useState("");

  const [cardNumbersNextInput, setCardNumbersNextInput] =
    useState<boolean>(false);
  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const fourthRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAllDone({ first, second, third, fourth })) {
      setCardNumbersNextInput(true);
    }
  }, [first, second, third, fourth]);

  const changeCardNumbers = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = getInputAttributes(event, CARD_NUMBER_KEYS);

    if (name === "first") {
      if (!Number.isInteger(Number(value))) {
        setFirst({ ...first, isError: true });
        setErrorMessage(ERRORS.isNotInteger);
        return;
      }
      setFirst({ value, isDone: value.length === 4, isError: false });
    } else if (name === "second") {
      if (!Number.isInteger(Number(value))) {
        setSecond({ ...second, isError: true });
        setErrorMessage(ERRORS.isNotInteger);
        return;
      }
      setSecond({ value, isDone: value.length === 4, isError: false });
    } else if (name === "third") {
      if (!Number.isInteger(Number(value))) {
        setThird({ ...third, isError: true });
        setErrorMessage(ERRORS.isNotInteger);
        return;
      }
      setThird({ value, isDone: value.length === 4, isError: false });
    } else if (name === "fourth") {
      if (!Number.isInteger(Number(value))) {
        setFourth({ ...fourth, isError: true });
        setErrorMessage(ERRORS.isNotInteger);
        return;
      }
      setFourth({ value, isDone: value.length === 4, isError: false });
    }

    if (value.length === 4) {
      if (name === "first") secondRef.current?.focus();
      else if (name === "second") thirdRef.current?.focus();
      else if (name === "third") fourthRef.current?.focus();
    }
  };

  const blurCardNumbers = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = getInputAttributes(event, CARD_NUMBER_KEYS);
    if (value.length !== 4) {
      if (name === "first") setFirst({ ...first, isError: true });
      else if (name === "second") setSecond({ ...second, isError: true });
      else if (name === "third") setThird({ ...third, isError: true });
      else if (name === "fourth") setFourth({ ...fourth, isError: true });
      setErrorMessage(ERRORS.isNotFourDigit);
    }
  };

  return {
    cardNumbers: { first, second, third, fourth },
    cardNumbersNextInput,
    changeCardNumbers,
    blurCardNumbers,
    cardNumbersRefs: { firstRef, secondRef, thirdRef, fourthRef },
    errorMessage,
  };
};

export default useCardNumbers;
