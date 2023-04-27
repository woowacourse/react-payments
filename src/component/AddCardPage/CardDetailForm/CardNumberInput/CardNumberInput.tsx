import React from "react";
import St from "./CardNumberInputStyled";
import { Input, InputSection } from "../../../common/Input";
import useCardNumber from "../../../../hooks/useCardNumber";

interface CardNumberInputProps {
  inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
}

function CardNumberInput({ inputRefs }: CardNumberInputProps) {
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
          autoFocus
          ref={(ref) => (inputRefs.current[0] = ref)}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            !e.currentTarget.validity.tooShort && inputRefs.current[1]?.focus();
            changeCardNumber(e);
          }}
        />
      </InputSection>
    </section>
  );
}

export default CardNumberInput;
