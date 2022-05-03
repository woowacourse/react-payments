import { CardInfoContext } from "contexts/CardInfoProvider";
import React, { useContext } from "react";

import Input from "../common/Input";
import InputContainer from "../common/InputContainer";

export default function CardNumber({ inputs }: { inputs: HTMLInputElement[] }) {
  const {
    cardInfo: { cardNumbers },
    cardInfoValidation: { cardNumbers: validation },
    onChangeCardNumber: onChange,
  } = useContext(CardInfoContext);

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
            {index !== 3 && <span className="card-number-delimiter">-</span>}
          </React.Fragment>
        ))}
      </div>
    </InputContainer>
  );
}
