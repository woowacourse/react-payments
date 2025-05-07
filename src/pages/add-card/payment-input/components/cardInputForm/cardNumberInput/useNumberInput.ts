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

  function updateCardState(index: number, value: string) {
    const updatedNumbers = [...cardNumberInfo.cardNumbers];
    const updatedMessages = [...cardNumberInfo.feedbackMessages];

    updatedNumbers[index] = value;
    updatedMessages[index] = getFirstErrorMessage(
      validateNumberString(value),
      "NUMBER"
    );

    setCardNumberInfo({
      cardNumbers: updatedNumbers,
      feedbackMessages: updatedMessages,
    });
    handleCardNumbersChange(updatedNumbers);

    return { updatedNumbers, updatedMessages };
  }

  function handleFocusMove(index: number, value: string, numbers: string[]) {
    const shouldMove =
      value.length === 4 && index < 3 && numbers.some((n) => n.length !== 4);
    if (shouldMove) inputRefs.current[index + 1]?.focus();
  }

  function handleValidationCheck(numbers: string[], messages: string[]) {
    const isAllValid =
      numbers.every((n) => n.length === 4) && messages.every((m) => m === "");
    const isStillInvalid =
      numbers.some((n) => n.length < 4) || messages.some((m) => m !== "");

    if (isAllValid) {
      onSuccessValidate(true);
      onSuccessNextInput();
    } else if (isStillInvalid) {
      onSuccessValidate(false);
    }
  }

  function onChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const { value } = e.target;
    const { updatedNumbers, updatedMessages } = updateCardState(index, value);

    handleFocusMove(index, value, updatedNumbers);
    handleValidationCheck(updatedNumbers, updatedMessages);
  }

  return {
    cardNumberInfo,
    inputRefs,
    onChangeHandler,
  };
}
