import React from "react";
import St from "./CardNumberInputStyled";
import { Input, InputSection } from "../../../common/Input";
import useCardNumber from "../../../../hooks/card/useCardNumber";
import useInputRef from "../../../../hooks/useInputRef";

function CardNumberInput() {
  const { displayNumber, changeCardNumber, isValid } = useCardNumber();

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
          onInvalid={(e) => {
            e.currentTarget.setCustomValidity("카드 번호를 입력해주세요.");
          }}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.currentTarget.setCustomValidity(
              isValid(e.currentTarget.value) ? "" : "카드 번호는 16자 이어야 합니다."
            );

            isValid(e.currentTarget.value) && focusNextInput();
            changeCardNumber(e);
          }}
        />
      </InputSection>
    </section>
  );
}

export default CardNumberInput;
