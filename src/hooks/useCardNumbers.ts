import { ChangeEvent, useState, FocusEvent, useRef, useEffect, RefObject } from "react";
import { CARD_NUMBER_KEYS } from "@/constants/cardInfo";
import { ERRORS } from "@/constants/messages";
import { isAllDone } from "@/utils/input";
import useInput from "./useInput";
import { getInputAttributes } from "@/utils/input";
import { CARD_NUMBER } from "@/constants/cardInfo";

const useCardNumbers = () => {
  const [first, setFirstValue, setFirstIsError, setFirstIsDone] = useInput();
  const [second, setSecondValue, setSecondIsError, setSecondIsDone] = useInput();
  const [third, setThirdValue, setThirdIsError, setThirdIsDone] = useInput();
  const [fourth, setFourthValue, setFourthIsError, setFourthIsDone] = useInput();
  const [errorMessage, setErrorMessage] = useState("");

  const [cardNumbersNextInput, setCardNumbersNextInput] = useState<boolean>(false);
  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const fourthRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAllDone({ first, second, third, fourth })) {
      setCardNumbersNextInput(true);
    }
  }, [first, second, third, fourth]);

  const changeCardNumber = (
    value: string,
    setValue: (value: string) => void,
    setIsError: (isError: boolean) => void,
    setIsDone: (isDone: boolean) => void,
    nextRef: RefObject<HTMLInputElement> | null = null
  ) => {
    if (!Number.isInteger(Number(value))) {
      setIsError(true);
      setErrorMessage(ERRORS.isNotInteger);
      return;
    }
    setIsError(false);
    setValue(value);
    setIsDone(value.length === CARD_NUMBER);
    setErrorMessage("");
    if (value.length === CARD_NUMBER) nextRef?.current?.focus();
  };

  const changeCardNumbers = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = getInputAttributes(event, CARD_NUMBER_KEYS);

    if (name === "first")
      changeCardNumber(value, setFirstValue, setFirstIsError, setFirstIsDone, secondRef);
    else if (name === "second")
      changeCardNumber(value, setSecondValue, setSecondIsError, setSecondIsDone, thirdRef);
    else if (name === "third")
      changeCardNumber(value, setThirdValue, setThirdIsError, setThirdIsDone, fourthRef);
    else if (name === "fourth")
      changeCardNumber(value, setFourthValue, setFourthIsError, setFourthIsDone);
  };

  const blurCardNumbers = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = getInputAttributes(event, CARD_NUMBER_KEYS);
    if (value.length !== 4) {
      if (name === "first") setFirstIsError(true);
      else if (name === "second") setSecondIsError(true);
      else if (name === "third") setThirdIsError(true);
      else if (name === "fourth") setFourthIsError(true);
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
