import React from "react";
import St from "./CardNumberInputStyled";
import { Input, InputSection } from "../../../common/Input";
import useCardNumber from "../../../../hooks/card/useCardNumber";
import useInputRef from "../../../../hooks/useInputRef";

function CardNumberInput() {
  const { displayNumber, changeCardNumber } = useCardNumber();

  const { inputRef, focusNextInput } = useInputRef();

  return (
    <section>
      <St.Title>카드 번호</St.Title>
      <InputSection>
        <Input
          type="text"
          minLength={19}
          required
          value={displayNumber}
          ref={inputRef}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            !e.currentTarget.validity.tooShort && focusNextInput();
            changeCardNumber(e);
          }}
        />
      </InputSection>
    </section>
  );
}

export default CardNumberInput;
