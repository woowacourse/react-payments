import React, { useState, useEffect } from "react";
import St from "./styled";

type CardNumberInputProps = {
  changeCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  CardNumberHidden: string;
};

function CardNumberInput({
  changeCardNumber,
  CardNumberHidden,
}: CardNumberInputProps) {
  return (
    <section>
      <St.Title>카드 번호</St.Title>
      <St.InputSection>
        <St.Input
          type="text"
          value={CardNumberHidden}
          onInput={changeCardNumber}
        ></St.Input>
      </St.InputSection>
    </section>
  );
}

export default CardNumberInput;
