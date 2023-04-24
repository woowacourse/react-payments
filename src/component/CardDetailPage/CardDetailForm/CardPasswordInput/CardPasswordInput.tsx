import React, { useRef } from "react";
import St from "./CardPasswordInputStyled";

type CardPasswordInputProps = {
  changeCardPassword: (e: React.FormEvent<HTMLInputElement>) => void;
  cardPassword: [string, string];
};

function CardPasswordInput({
  changeCardPassword,
  cardPassword,
}: CardPasswordInputProps) {
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  const toNextInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length === 1) {
      inputRef2.current?.focus();
    }
  };

  return (
    <section>
      <St.Title>카드 비밀번호</St.Title>
      <St.Contents>
        <St.InputSection>
          <St.Input
            id="first"
            type="password"
            ref={inputRef1}
            value={cardPassword[0]}
            minLength={1}
            required
            onInput={(e) => {
              toNextInput(e);
              changeCardPassword(e);
            }}
          />
        </St.InputSection>
        <St.InputSection>
          <St.Input
            id="second"
            type="password"
            ref={inputRef2}
            value={cardPassword[1]}
            minLength={1}
            required
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
