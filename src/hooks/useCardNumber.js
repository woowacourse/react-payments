import { useRef, useState } from "react";
import { isFilledCardNumberLength, isOverCardNumberLength } from "validation";

const useCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);

  const secondCardNumberInputRef = useRef();
  const thirdCardNumberInputRef = useRef();
  const fourthCardNumberInputRef = useRef();

  const cardNumberInputRefs = [
    null,
    secondCardNumberInputRef,
    thirdCardNumberInputRef,
    fourthCardNumberInputRef,
  ];

  const handleChangeCardNumber = (index, { target: { value } }) => {
    if (isOverCardNumberLength(value) || isNaN(value)) return;

    if (isFilledCardNumberLength(value)) {
      cardNumberInputRefs[index + 1]?.current.focus();
    }

    setCardNumbers((prev) => {
      const newState = [...prev];
      newState[index] = value;
      return newState;
    });
  };

  return { cardNumbers, handleChangeCardNumber, cardNumberInputRefs };
};

export default useCardNumber;
