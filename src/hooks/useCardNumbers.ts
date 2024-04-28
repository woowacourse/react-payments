import {
  ChangeEvent,
  useState,
  FocusEvent,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
  RefObject,
} from "react";
import { CARD_NUMBER_KEYS } from "@/constants/cardInfo";
import { ERRORS } from "@/constants/messages";
import { isAllDone } from "@/utils/input";
import useInput from "./useInput";
import { getInputAttributes } from "@/utils/input";
import { CARD_NUMBER } from "@/constants/cardInfo";
import { Input } from "@/types/card";

const useCardNumbers = () => {
  const [first, setFirst] = useInput();
  const [second, setSecond] = useInput();
  const [third, setThird] = useInput();
  const [fourth, setFourth] = useInput();
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
    cardNumber: Input,
    setCardNumber: Dispatch<SetStateAction<Input>>,
    nextRef: RefObject<HTMLInputElement> | null = null
  ) => {
    if (!Number.isInteger(Number(value))) {
      setFirst({ ...cardNumber, isError: true });
      setErrorMessage(ERRORS.isNotInteger);
      return;
    }
    setCardNumber({ value, isDone: value.length === CARD_NUMBER, isError: false });
    setErrorMessage("");

    if (value.length === CARD_NUMBER) nextRef?.current?.focus();
  };

  const changeCardNumbers = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = getInputAttributes(event, CARD_NUMBER_KEYS);

    if (name === "first") changeCardNumber(value, first, setFirst, secondRef);
    else if (name === "second") changeCardNumber(value, second, setSecond, thirdRef);
    else if (name === "third") changeCardNumber(value, third, setThird, fourthRef);
    else if (name === "fourth") changeCardNumber(value, fourth, setFourth);
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
