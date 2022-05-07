import React, { useEffect, useRef, useState } from "react";

import { InputBasic } from "components/common/InputBasic";
import { InputBox } from "components/common/InputBox";
import { InputTitle } from "components/common/InputTitle";
import { InputContainer } from "components/common/styled";
import { RULE_INPUT } from "constants/constants";

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
  const [validate, setValidate] = useState(false);
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

    setValidate(isCardNumbersCompleted);
    handleCardNumberCheck(isCardNumbersCompleted);

    if (cardType.name === "" && isCardNumbersCompleted) {
      handleModalVisible();
    }
  }, [cardNumbers]);

  const handleNumberChange = (e, name) => {
    handleCardNumbersInput((prev) => ({ ...prev, [name]: e.target.value }));
  };

  return (
    <InputContainer>
      <InputTitle isValid={validate}>카드 번호</InputTitle>
      <InputBox color="#04c09e" padding="0 5%">
        {DEFAULT_CARD_NUMBERS_TYPE.map(({ name, type }, i) => (
          <InputBasic
            key={name}
            id={`input_card_number-${i}`}
            inputRef={(elem) => (numberInputRefs.current[i] = elem)}
            value={cardNumbers?.[name]}
            onChange={(e) => handleNumberChange(e, name)}
            pattern={RULE_INPUT.CARD_NUMBER_RULE}
            maxLength="4"
            type={type}
          />
        )).reduce((prev, cur) => [prev, "-", cur])}
      </InputBox>
    </InputContainer>
  );
};
