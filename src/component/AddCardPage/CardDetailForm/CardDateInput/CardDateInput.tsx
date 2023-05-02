import React, { useEffect } from "react";
import St from "./CardDateInputStyled";
import useCardDate from "../../../../hooks/card/useCardDate";
import useInputRef from "../../../../hooks/useInputRef";

function CardDateInput() {
  const { cardDate, changeCardDate, validate } = useCardDate();

  const { inputRef, focusNextInput } = useInputRef();

  useEffect(() => {
    const isValid = validate();

    inputRef.current?.setCustomValidity(
      isValid ? "" : "올바른 유효 기간을 입력해주세요. 예) 05/23"
    );

    isValid && focusNextInput();
  }, [cardDate]);

  return (
    <section>
      <St.Title>만료일</St.Title>
      <St.InputSection>
        <St.Input
          type="text"
          value={cardDate}
          minLength={5}
          required
          placeholder="MM/YY"
          ref={inputRef}
          onChange={changeCardDate}
        />
      </St.InputSection>
    </section>
  );
}

export default CardDateInput;
