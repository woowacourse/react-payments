import React, { useState, useContext } from "react";
import Input from "src/components/@common/Input";
import FormLabel from "src/components/@common/FormLabel";
import { ONLY_NUMBER_REGEXP } from "src/utils/regexp";
import { cardInfoContext } from "src/context/CardInfoContext";
import ErrorSpan from "src/components/@common/ErrorSpan";
import useAutoFocus from "src/hooks/useAutoFocus";
import { Styled } from "./CardPassword.styles";
import { NUMBERS, PASSWORD_NUMBER_TYPES } from "src/utils/constant";
import { lengthMatchValidation } from "src/utils/validation";

interface CardPasswordObj {
  first: string;
  second: string;
}

function CardPassword() {
  const { MAX_PASSWORD, EACH_PASSWORD } = NUMBERS;
  const [cardInput, setCardInput] = useContext(cardInfoContext);

  const [passwordError, setPasswordError] = useState(false);

  const { refs, nextInputFocus } = useAutoFocus({
    maxLength: EACH_PASSWORD,
  });

  const passwordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.dataset["order"] as keyof CardPasswordObj;
    const idx = event.currentTarget.dataset["idx"];

    if (!ONLY_NUMBER_REGEXP.test(value)) return;

    try {
      const firstVal = refs.current[0]?.value ?? "";
      const secondVal = refs.current[1]?.value ?? "";
      const passwordVal = firstVal + secondVal;

      lengthMatchValidation(passwordVal, MAX_PASSWORD);

      setPasswordError(false);
    } catch {
      setPasswordError(true);
    } finally {
      if (!setCardInput) return;
      setCardInput((prev) => ({
        ...prev,
        password: {
          ...prev.password,
          [name]: value,
        },
      }));
    }

    nextInputFocus(Number(idx));
  };

  const inputs = PASSWORD_NUMBER_TYPES.map((key, idx) => (
    <Input
      key={key}
      data-order={key}
      data-idx="0"
      value={cardInput.password[key]}
      onChange={passwordChange}
      maxLength={EACH_PASSWORD}
      inputmode="numeric"
      type="password"
      customInputStyle={Styled.PasswordInput}
      placeholder="•"
      ref={(el) => (refs.current[idx] = el as HTMLInputElement)}
    />
  ));

  return (
    <Styled.CardPasswordContainer>
      <FormLabel>{"카드 비밀번호"}</FormLabel>
      <Styled.PasswordInputContainer>
        {inputs}
        <Styled.DotParagraph>•</Styled.DotParagraph>
        <Styled.DotParagraph>•</Styled.DotParagraph>
      </Styled.PasswordInputContainer>
      {passwordError && (
        <ErrorSpan>비밀번호 앞 2자리를 입력해주세요.</ErrorSpan>
      )}
    </Styled.CardPasswordContainer>
  );
}

export default CardPassword;
