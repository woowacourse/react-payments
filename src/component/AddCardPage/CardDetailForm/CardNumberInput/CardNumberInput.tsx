import React, { useEffect } from "react";
import St from "./CardNumberInputStyled";
import { Input, InputSection } from "../../../common/Input";
import useCardNumber from "../../../../hooks/card/useCardNumber";
import useInputRef from "../../../../hooks/useInputRef";

function CardNumberInput() {
  const { displayNumber, changeCardNumber, validate } = useCardNumber();

  const { inputRef, focusNextInput } = useInputRef();

  useEffect(() => {
    const isValid = validate();

    inputRef.current?.setCustomValidity(
      isValid ? "" : "카드 번호 16자리를 입력해주세요."
    );

    isValid && focusNextInput();
  }, [displayNumber]);

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
          onChange={changeCardNumber}
        />
      </InputSection>
    </section>
  );
}

export default CardNumberInput;
