import React from "react";
import St from "./CardNumberInputStyled";
import { Input, InputSection } from "../../../common/Input";
import useCardNumber from "../../../../hooks/useCardNumber";

function CardNumberInput() {
  const { displayNumber, changeCardNumber } = useCardNumber();

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
