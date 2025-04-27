import { useState, useRef } from "react";
import { validateNumberString } from "../validator/validateCardInput";
import { getFirstErrorMessage } from "../validator/getFirstErrorMessage";

export function useCardNumberInput(
  onSuccessValidate: (isValid: boolean) => void,
  handleCardNumbersChange: (cardNumbers: string[]) => void,
  onSuccessNextInput: () => void
) {
  const [cardNumberInfo, setCardNumberInfo] = useState({
    cardNumbers: ["", "", "", ""],
    feedbackMessages: ["", "", "", ""],
  });

  const inputRefs = useRef<(HTMLInputElement | null)[]>([
    null,
    null,
    null,
    null,
  ]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const index = Number(name.split("-")[1]);

    const updatedNumbers = [...cardNumberInfo.cardNumbers];
    const updatedMessages = [...cardNumberInfo.feedbackMessages];

    updatedNumbers[index] = value;

    const errorResult = validateNumberString(value);
    const errorMessage = getFirstErrorMessage(errorResult, "NUMBER");
    updatedMessages[index] = errorMessage;

    setCardNumberInfo({
      cardNumbers: updatedNumbers,
      feedbackMessages: updatedMessages,
    });

    handleCardNumbersChange(updatedNumbers);

    if (
      value.length === 4 &&
      index < 3 &&
      updatedNumbers.some((number) => number.length !== 4)
    ) {
      inputRefs.current[index + 1]?.focus();
    } else if (
      updatedNumbers.every((number) => number.length === 4) &&
      updatedMessages.every((message) => message === "")
    ) {
      onSuccessValidate(true);
      onSuccessNextInput();
    } else if (
      value.length < 4 ||
      updatedMessages.some((message) => message !== "")
    ) {
      onSuccessValidate(false);
    }
  }

  return {
    cardNumberInfo,
    inputRefs,
    onChangeHandler,
  };
}
