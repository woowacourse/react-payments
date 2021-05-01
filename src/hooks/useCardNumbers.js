import { useRef, useState } from "react";
import { CARD_NUMBER, FORMAT_CHAR } from "../constants";

import { isNumberValue } from "../utils";

const unformatCardNumbers = (formattedValue) => {
  return formattedValue.replace(FORMAT_CHAR.CARD_NUMBERS_SEPARATOR_REG, "");
};

const splitCardNumbers = (value) => {
  return value.replace(/\D/g, "").match(/.{1,4}/g) || [];
};

const correctSelectionRange = (selectionStart, inputRef) => {
  const mod =
    CARD_NUMBER.PARTIAL_LENGTH + FORMAT_CHAR.CARD_NUMBERS_SEPARATOR.length;
  const remainder = selectionStart % mod;

  const isSelectionValid = [
    ...Array(FORMAT_CHAR.CARD_NUMBERS_SEPARATOR.length),
  ].every((_, index) => remainder !== (mod - index) % mod);

  const fixedSelectionStart = isSelectionValid
    ? selectionStart
    : selectionStart + ((mod + 1 - remainder) % mod);

  inputRef?.current?.setSelectionRange(
    fixedSelectionStart,
    fixedSelectionStart
  );
};

const useCardNumbers = (initialCardNumbers) => {
  const [cardNumbers, setCardNumbers] = useState(initialCardNumbers);
  const cardNumbersInputRef = useRef();

  const onCardNumbersChange = (event) => {
    const { value: inputString, selectionStart } = event.target;
    const joinedCardNumbers = cardNumbers.join(
      FORMAT_CHAR.CARD_NUMBERS_SEPARATOR
    );
    const lengthDiffComparedToPrev =
      inputString.length - joinedCardNumbers.length;
    let updatedCardNumbers = joinedCardNumbers;

    if (lengthDiffComparedToPrev >= 0) {
      const inputChar = inputString[selectionStart - 1];

      if (!isNumberValue(inputChar)) {
        return;
      }

      updatedCardNumbers =
        joinedCardNumbers.slice(0, selectionStart - 1) +
        inputChar +
        joinedCardNumbers.slice(
          lengthDiffComparedToPrev === 0 ? selectionStart : selectionStart - 1
        );
    }

    if (lengthDiffComparedToPrev < 0) {
      updatedCardNumbers =
        joinedCardNumbers.slice(0, selectionStart) +
        joinedCardNumbers.slice(selectionStart + 1);
    }

    const unformattedValue = unformatCardNumbers(updatedCardNumbers);
    const splitNumbers = splitCardNumbers(unformattedValue);

    setCardNumbers(splitNumbers);
    correctSelectionRange(selectionStart, cardNumbersInputRef);
  };

  return [cardNumbers, cardNumbersInputRef, onCardNumbersChange];
};

export default useCardNumbers;
