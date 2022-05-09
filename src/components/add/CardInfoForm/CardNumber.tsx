import Input from "components/common/Input";
import InputContainer from "components/common/InputContainer";
import React from "react";
import type { InputChangeFunction } from "types";
import type { CardNumbers, Validation } from "types/cardInfo";
interface CardNumberProps {
  cardNumbers: CardNumbers;
  onChange: InputChangeFunction;
  validation: Validation;
  inputs: HTMLInputElement[];
}

function CardNumber({ cardNumbers, onChange, validation, inputs }: CardNumberProps) {
  return (
    <InputContainer title="카드번호" validation={validation}>
      <div className="input-box">
        {cardNumbers.map((cardNumber, index) => (
          <React.Fragment key={index}>
            <Input
              type={index < 2 ? "text" : "password"}
              value={cardNumber}
              onChange={onChange}
              maxLength={4}
              name="cardNumbers"
              data-index={index}
              inputs={inputs}
            />
            <span className="card-number-delimiter" />
          </React.Fragment>
        ))}
      </div>
    </InputContainer>
  );
}

export default React.memo(CardNumber);
