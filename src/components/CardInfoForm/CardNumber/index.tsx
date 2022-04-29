import React from "react";

import { CardNumbers } from "../../../types";
import Input from "../../../common/Input";
import InputContainer from "../../../common/InputContainer";

interface CardNumberProps {
  cardNumbers: CardNumbers;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}
export default function CardNumber({ cardNumbers, onChange, isValid }: CardNumberProps) {
  return (
    <InputContainer inputTitle="카드번호" isValid={isValid}>
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
            />
            {index !== 3 ? <span className="card-number-delimiter">-</span> : null}
          </React.Fragment>
        ))}
      </div>
    </InputContainer>
    // </div>
  );
}
