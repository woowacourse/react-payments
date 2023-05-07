import React, { useEffect } from "react";
import St from "./CardPasswordInputStyled";
import useCardPassword from "hooks/card/useCardPassword";
import useInputRef from "hooks/useInputRef";

function CardPasswordInput() {
  const { cardPassword, changeCardPassword } = useCardPassword();

  const { inputRef, focusNextInput } = useInputRef();
  const inputRef2 = useInputRef().inputRef;

  useEffect(() => {
    inputRef.current?.setCustomValidity(
      cardPassword[0] ? "" : "비밀번호를 입력해주세요."
    );

    cardPassword[0] && focusNextInput();
  }, [cardPassword[0]]);

  useEffect(() => {
    inputRef2.current?.setCustomValidity(
      cardPassword[1] ? "" : "비밀번호를 입력해주세요."
    );
  }, [cardPassword[1]]);

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
            onChange={changeCardPassword}
          />
        </St.InputSection>
        <St.InputSection>
          <St.Input
            id="second"
            type="password"
            value={cardPassword[1]}
            minLength={1}
            required
            ref={inputRef2}
            onChange={changeCardPassword}
          />
        </St.InputSection>

        <St.LastDigits>•</St.LastDigits>
        <St.LastDigits>•</St.LastDigits>
      </St.Contents>
    </section>
  );
}

export default CardPasswordInput;
