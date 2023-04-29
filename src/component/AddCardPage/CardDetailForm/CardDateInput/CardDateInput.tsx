import React from "react";
import St from "./CardDateInputStyled";
import useCardDate from "../../../../hooks/card/useCardDate";

interface CardDateInputProps {
  inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
}

function CardDateInput({ inputRefs }: CardDateInputProps) {
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
          placeholder="MM/YY"
          ref={(ref) => (inputRefs.current[2] = ref)}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            !e.currentTarget.validity.tooShort && inputRefs.current[3]?.focus();
            changeCardDate(e);
          }}
        ></St.Input>
      </St.InputSection>
    </section>
  );
}

export default CardDateInput;
