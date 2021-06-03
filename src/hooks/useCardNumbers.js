import { useEffect, useRef, useState } from "react";
import { CARD_NUMBER, FORMAT_CHAR } from "../constants";

import { isNumberValue } from "../utils";

const unformatCardNumbers = (formattedValue) => {
  return formattedValue.replace(FORMAT_CHAR.CARD_NUMBERS_SEPARATOR_REG, "");
};

const splitCardNumbers = (value) => {
  return value.replace(/\D/g, "").match(/.{1,4}/g) || [];
};

const calculateProperSelectionLocation = (curSelection) => {
  const mod =
    CARD_NUMBER.PARTIAL_LENGTH + FORMAT_CHAR.CARD_NUMBERS_SEPARATOR.length;
  const remainder = curSelection % mod;

  const isSelectionValid = [
    ...Array(FORMAT_CHAR.CARD_NUMBERS_SEPARATOR.length - 1),
  ].every((_, index) => remainder !== (mod - index - 1) % mod);

  return isSelectionValid ? curSelection : curSelection + (mod - remainder + 1);
};

const useCardNumbers = (initialCardNumbers) => {
  const [cardNumbers, setCardNumbers] = useState(initialCardNumbers);
  const [inputSelectionStart, setInputSelectionStart] = useState(0);
  const [isCardNumbersFullfilled, setIsCardNumbersFullFilled] = useState(false);
  const cardNumbersInputRef = useRef();

  useEffect(() => {
    cardNumbersInputRef?.current?.setSelectionRange(
      inputSelectionStart,
      inputSelectionStart
    );
  }, [inputSelectionStart, cardNumbers]);

  useEffect(() => {
    const isFullfilled = [...Array(CARD_NUMBER.LENGTH)]
      .map(
        (_, index) => cardNumbers[index]?.length === CARD_NUMBER.PARTIAL_LENGTH
      )
      .every((value) => value === true);

    setIsCardNumbersFullFilled(isFullfilled);
  }, [cardNumbers]);

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
    setInputSelectionStart(calculateProperSelectionLocation(selectionStart));
  };

  return [
    cardNumbers,
    cardNumbersInputRef,
    onCardNumbersChange,
    isCardNumbersFullfilled,
  ];
};

export default useCardNumbers;
