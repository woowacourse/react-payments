import React from "react";

import type { InputChangeFunction } from "../../types";
import type { CardNumbers } from "../../types/cardInfo";
import Input from "../common/Input";
import InputContainer from "../common/InputContainer";

interface CardNumberProps {
  cardNumbers: CardNumbers;
  onChange: InputChangeFunction;
  isValid: boolean;
}
export default function CardNumber({ cardNumbers, onChange, isValid }: CardNumberProps) {
  return (
    <InputContainer title="카드번호" isValid={isValid}>
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
              formSelector="#card-info-form"
            />
            {index !== 3 && <span className="card-number-delimiter">-</span>}
          </React.Fragment>
        ))}
      </div>
    </InputContainer>
  );
}
