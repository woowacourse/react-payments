import React from "react";
import St from "./CardDateInputStyled";
import useCardDate from "../../../../hooks/card/useCardDate";
import useInputRef from "../../../../hooks/useInputRef";

function CardDateInput() {
  const { cardDate, changeCardDate } = useCardDate();

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
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            !e.currentTarget.validity.tooShort && focusNextInput();
            changeCardDate(e);
          }}
        ></St.Input>
      </St.InputSection>
    </section>
  );
}

export default CardDateInput;
