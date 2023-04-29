import React from "react";
import St from "./CardPasswordInputStyled";
import useCardPassword from "../../../../hooks/useCardPassword";

interface CardPasswordInputProps {
  inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
}

function CardPasswordInput({ inputRefs }: CardPasswordInputProps) {
  const { cardPassword, changeCardPassword } = useCardPassword();

  return (
    <section>
      <St.Title>카드 비밀번호</St.Title>
      <St.Contents>
        <St.InputSection>
          <St.Input
            id="first"
            type="password"
            pattern="[0-9]*"
            value={cardPassword[0]}
            minLength={1}
            required
            ref={(ref) => (inputRefs.current[5] = ref)}
            onInput={(e) => {
              e.currentTarget.validity.valid && inputRefs.current[6]?.focus();
              changeCardPassword(e);
            }}
          />
        </St.InputSection>
        <St.InputSection>
          <St.Input
            id="second"
            type="password"
            value={cardPassword[1]}
            minLength={1}
            required
            ref={(ref) => (inputRefs.current[5] = ref)}
            onInput={changeCardPassword}
          />
        </St.InputSection>

        <St.LastDigits>•</St.LastDigits>
        <St.LastDigits>•</St.LastDigits>
      </St.Contents>
    </section>
  );
}

export default CardPasswordInput;
