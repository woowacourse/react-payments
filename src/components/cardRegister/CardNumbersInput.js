import { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { MAX_LENGTH } from "../../constants/card";
import {
  CardInfoCompleteDispatchContext,
  setCardNumberComplete,
} from "../../providers/CardInfoCompleteProvider";
import {
  CardInfoDispatchContext,
  CardInfoStateContext,
  setCardNumber,
} from "../../providers/CardInfoProvider";
import { AutoFocusInputContainer } from "../common/AutoFocusInputContainer";

import {
  InputContainer,
  InputTitle,
  InputBasic,
  InputBox,
} from "../common/styled";

const DEFAULT_CARD_NUMBERS_TYPE = [
  { name: "firstNumber", type: "text" },
  { name: "secondNumber", type: "text" },
  { name: "thirdNumber", type: "password" },
  { name: "fourthNumber", type: "password" },
];

export const CardNumbersInput = ({ openModal }) => {
  const cardInfo = useContext(CardInfoStateContext);
  const infoDispatch = useContext(CardInfoDispatchContext);
  const completeDispatch = useContext(CardInfoCompleteDispatchContext);

  const [cardNumbers, setCardNumbers] = useState(cardInfo.cardNumbers);

  const handleNumberChange = (e, name) => {
    if (
      isNaN(e.nativeEvent.data) ||
      e.target.value.length > MAX_LENGTH.EACH_CARD_NUMBER
    ) {
      return;
    }

    setCardNumbers((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const updateTypedCardNumber = (e, name) => {
    if (!name) {
      console.log(name);
      return;
    }
    infoDispatch(setCardNumber(name, e.target.value));
  };

  useEffect(() => {
    const isCardNumbersCompleted = Object.values(cardNumbers).every(
      (number) => number.length === MAX_LENGTH.EACH_CARD_NUMBER
    );

    completeDispatch(setCardNumberComplete(isCardNumbersCompleted));

    if (cardInfo.cardType.name === "" && isCardNumbersCompleted) {
      openModal();
    }
  }, [cardNumbers]);

  return (
    <InputContainer>
      <InputTitle>카드 번호</InputTitle>
      <Style.CardNumberInputBox>
        <AutoFocusInputContainer maxValueLength={MAX_LENGTH.EACH_CARD_NUMBER}>
          {DEFAULT_CARD_NUMBERS_TYPE.map(({ name, type }) => (
            <InputBasic
              key={name}
              value={cardNumbers[name]}
              onChange={(e) => handleNumberChange(e, name)}
              onBlur={(e) => {
                updateTypedCardNumber(e, name);
              }}
              type={type}
            />
          )).reduce((prev, cur) => [prev, "-", cur])}
        </AutoFocusInputContainer>
      </Style.CardNumberInputBox>
    </InputContainer>
  );
};

const Style = {
  CardNumberInputBox: styled(InputBox)`
    color: #04c09e;
    padding: 0 50px;
  `,
};
