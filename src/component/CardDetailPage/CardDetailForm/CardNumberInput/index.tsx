import React, { useState, useEffect } from "react";
import St from "./styled";

type CardNumberInputProps = {
  changeCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardNumberHidden: string;
};

function CardNumberInput({
  changeCardNumber,
  cardNumberHidden,
}: CardNumberInputProps) {
  return (
    <section>
      <St.Title>카드 번호</St.Title>
      <St.InputSection>
        <St.Input
          type="text"
          minLength={19}
          required
          value={cardNumberHidden}
          onInput={changeCardNumber}
        ></St.Input>
      </St.InputSection>
    </section>
  );
}

export default CardNumberInput;
