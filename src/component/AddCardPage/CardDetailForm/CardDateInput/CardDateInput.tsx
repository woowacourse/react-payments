import React from "react";
import St from "./CardDateInputStyled";
import useCardDate from "../../../../hooks/card/useCardDate";
import useInputRef from "../../../../hooks/useInputRef";

function CardDateInput() {
  const { cardDate, changeCardDate, isValid } = useCardDate();

  const { inputRef, focusNextInput } = useInputRef();

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
          onInvalid={(e) => {
            e.currentTarget.setCustomValidity("올바른 유효 기간을 입력해주세요.");
          }}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.currentTarget.setCustomValidity(
              isValid(e.currentTarget.value) ? "" : "MM,YY 순으로 입력해주세요."
            );

            isValid(e.currentTarget.value) && focusNextInput();
            changeCardDate(e);
          }}
        ></St.Input>
      </St.InputSection>
    </section>
  );
}

export default CardDateInput;
