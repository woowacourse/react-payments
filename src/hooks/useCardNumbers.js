import { useState } from "react";

import { isNumberValue } from "../utils";

const unformatCardNumbers = (formattedValue) => {
  return formattedValue.replace(/[\s-]/g, "");
};

const splitCardNumbers = (value) => {
  const splitNumbers = [];
  let i;

  for (i = 0; i < value.length / 4; i++) {
    splitNumbers.push(value.slice(i * 4, (i + 1) * 4));
  }
  if (value[i * 4] !== undefined) {
    splitNumbers.push(value.slice(i * 4, (i + 1) * 4));
  }

  return splitNumbers;
};

const useCardNumbers = (initialCardNumbers) => {
  const [cardNumbers, setCardNumbers] = useState(initialCardNumbers);
  const [selectionStart, setSelectionStart] = useState(0);

  const onCardNumbersChange = (event) => {
    const { value, selectionStart } = event.target;
    const joinedCardNumbers = cardNumbers.join(" - ");
    const diff = value.length - joinedCardNumbers.length;
    let updatedCardNumbers = joinedCardNumbers;

    const mod = selectionStart % 7;
    if (mod === 0 || mod === 6 || mod === 5) {
      setSelectionStart(selectionStart + ((8 - mod) % 7));
    } else {
      setSelectionStart(selectionStart);
    }

    switch (true) {
      case diff > 0:
        if (!isNumberValue(value[selectionStart - 1])) {
          return;
        }

        updatedCardNumbers =
          joinedCardNumbers.slice(0, selectionStart - 1) +
          value[selectionStart - 1] +
          joinedCardNumbers.slice(selectionStart - 1);
        break;
      case diff === 0:
        if (!isNumberValue(value[selectionStart - 1])) {
          return;
        }

        updatedCardNumbers =
          joinedCardNumbers.slice(0, selectionStart - 1) +
          value[selectionStart - 1] +
          joinedCardNumbers.slice(selectionStart);
        break;
      case diff < 0:
        updatedCardNumbers =
          joinedCardNumbers.slice(0, selectionStart) +
          joinedCardNumbers.slice(selectionStart + 1);
        break;
      default:
    }

    const unformattedValue = unformatCardNumbers(updatedCardNumbers);
    const splitNumbers = splitCardNumbers(unformattedValue);

    setCardNumbers(splitNumbers);
  };

  return [cardNumbers, selectionStart, onCardNumbersChange];
};

export default useCardNumbers;
