import React, { useContext } from "react";

import useInputValidation from "../../../hooks/useInputValidation";
import { CardNumbers } from "../../../types";
import Input from "../../../common/Input";
import InputContainer from "../../../common/InputContainer";
import { Context } from "../../../contexts/CardContext";

interface CardNumberProps {
  validateFormValidation: (key: string, isValid: boolean) => void;
}

const checkCardNumbers = (cardNumbers: CardNumbers) => {
  if (!cardNumbers.every(cardNumber => cardNumber.length === 4)) {
    throw new Error("카드 번호를 입력해주세요.");
  }
};

export default function CardNumber({ validateFormValidation }: CardNumberProps) {
  const { inputValidation, validateInput, isValidInput } = useInputValidation(false);
  const [cardInfo, dispatch] = useContext(Context);
  const { cardNumbers } = cardInfo;

  const handleChangeCardNumbers = e => {
    const { value } = e.target;
    const { index } = e.target.dataset;
    const targetCardNumbers: CardNumbers = [...cardNumbers];

    targetCardNumbers[index] = value;

    validateInput(targetCardNumbers, checkCardNumbers);
    validateFormValidation("cardNumbers", isValidInput(targetCardNumbers, checkCardNumbers));

    dispatch({ type: "UPDATE_CARD_NUMBER", payload: { cardNumbers: value, index } });
  };

  return (
    <InputContainer inputTitle="카드번호" validation={inputValidation}>
      <div className="input-box">
        {cardNumbers.map((cardNumber, index) => (
          <React.Fragment key={index}>
            <Input
              type={index < 2 ? "text" : "password"}
              value={cardNumber}
              onChange={handleChangeCardNumbers}
              maxLength={4}
              name="cardNumbers"
              data-index={index}
              pattern="^[•0-9]{0,4}$"
            />
            <span className="card-number-delimiter" />
          </React.Fragment>
        ))}
      </div>
    </InputContainer>
  );
}
