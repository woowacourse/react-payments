import React from "react";
import St from "./CardPasswordInputStyled";
import useCardPassword from "../../../../hooks/card/useCardPassword";
import useInputRef from "../../../../hooks/useInputRef";

function CardPasswordInput() {
  const { cardPassword, changeCardPassword } = useCardPassword();

  const { inputRef, focusNextInput } = useInputRef();

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
            ref={inputRef}
            onInvalid={(e) => {
              e.currentTarget.setCustomValidity("비밀번호를 입력해주세요.");
            }}
            onInput={(e) => {
              const validity = e.currentTarget.validity;

              !validity.tooShort && e.currentTarget.setCustomValidity("");

              validity.valid && focusNextInput();
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
            onInvalid={(e) => {
              e.currentTarget.setCustomValidity("비밀번호를 입력해주세요.");
            }}
            onInput={(e) => {
              const validity = e.currentTarget.validity;

              !validity.tooShort && e.currentTarget.setCustomValidity("");

              changeCardPassword(e);
            }}
          />
        </St.InputSection>

        <St.LastDigits>•</St.LastDigits>
        <St.LastDigits>•</St.LastDigits>
      </St.Contents>
    </section>
  );
}

export default CardPasswordInput;
