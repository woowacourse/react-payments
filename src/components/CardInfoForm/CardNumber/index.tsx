import React from "react";

import useInputValidation from "../../../hooks/useInputValidation";
import { CardNumbers } from "../../../types";
import Input from "../../../common/Input";
import InputContainer from "../../../common/InputContainer";
import { checkCardNumbers } from "../../../validations/cardInfoForm";

interface CardNumberProps {
  cardNumbers: CardNumbers;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validateFormValidation: any;
}

export default function CardNumber({
  cardNumbers,
  onChange,
  validateFormValidation,
}: CardNumberProps) {
  const { inputValidation, validateInput, isValidInput } = useInputValidation(false);

  const handleChangeCardNumbers = e => {
    const { value } = e.target;
    const { index } = e.target.dataset;
    const targetCardNumbers = cardNumbers;

    targetCardNumbers[index] = value;

    validateInput(targetCardNumbers, checkCardNumbers);
    validateFormValidation("cardNumbers", isValidInput(targetCardNumbers, checkCardNumbers));

    onChange(e);
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
