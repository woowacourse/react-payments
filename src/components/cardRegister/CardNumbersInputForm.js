import React, { useEffect, useRef } from "react";

import { InputBasic } from "../common/InputBasic";
import { InputBox } from "../common/InputBox";
import { InputContainer, InputTitle } from "../common/styled";

const DEFAULT_CARD_NUMBERS_TYPE = [
  { name: "firstNumber", type: "text" },
  { name: "secondNumber", type: "text" },
  { name: "thirdNumber", type: "password" },
  { name: "fourthNumber", type: "password" },
];

export const CardNumbersInputForm = ({
  cardType,
  cardNumbers,
  handleCardNumbersInput,
  handleCardNumberCheck,
  handleModalVisible,
}) => {
  const handleNumberChange = (e, name) => {
    if (isNaN(e.nativeEvent.data) || e.target.value.length > 4) {
      return;
    }

    handleCardNumbersInput((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const numberInputRefs = useRef([]);

  useEffect(() => {
    const isCardNumbersCompleted = Object.values(cardNumbers).every(
      (number, i) => {
        if (number.length === 4) {
          numberInputRefs.current[i + 1]?.focus();
          return true;
        }
        return false;
      }
    );

    handleCardNumberCheck(isCardNumbersCompleted);

    if (cardType.name === "" && isCardNumbersCompleted) {
      handleModalVisible();
    }
  }, [cardNumbers]);

  return (
    <InputContainer>
      <InputTitle>카드 번호</InputTitle>
      <InputBox color="#04c09e" padding="0 50px">
        {DEFAULT_CARD_NUMBERS_TYPE.map(({ name, type }, i) => (
          <InputBasic
            key={name}
            inputRef={(elem) => (numberInputRefs.current[i] = elem)}
            value={cardNumbers?.[name]}
            onChange={(e) => handleNumberChange(e, name)}
            type={type}
          />
        )).reduce((prev, cur) => [prev, "-", cur])}
      </InputBox>
    </InputContainer>
  );
};
