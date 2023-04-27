import React from "react";
import St from "./CardDateInputStyled";
import useCardDate from "../../../../hooks/useCardDate";

function CardDateInput() {
  const { cardDate, changeCardDate } = useCardDate();

  return (
    <section>
      <St.Title>만료일</St.Title>
      <St.InputSection>
        <St.Input
          type="text"
          value={cardDate}
          minLength={5}
          required
          onInput={changeCardDate}
          placeholder="MM/YY"
        ></St.Input>
      </St.InputSection>
    </section>
  );
}

export default CardDateInput;
