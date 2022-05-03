import { useRef, useState } from "react";
import { CARD_NUMBER } from "../constant";

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
    if (value.length > CARD_NUMBER.UNIT_LENGTH || isNaN(value)) return;

    if (value.length === CARD_NUMBER.UNIT_LENGTH) {
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
