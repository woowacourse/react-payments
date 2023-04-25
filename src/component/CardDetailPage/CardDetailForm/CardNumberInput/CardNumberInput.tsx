import React from "react";
import St from "./CardNumberInputStyled";
import { Input, InputSection } from "../../../common/Input";

type CardNumberInputProps = {
  changeCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
  displayNumber: string;
};

function CardNumberInput({
  changeCardNumber,
  displayNumber,
}: CardNumberInputProps) {
  return (
    <section>
      <St.Title>카드 번호</St.Title>
      <InputSection>
        <Input
          type="text"
          minLength={19}
          required
          value={displayNumber}
          onInput={changeCardNumber}
        />
      </InputSection>
    </section>
  );
}

export default CardNumberInput;
