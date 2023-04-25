import React from "react";
import Input from "src/components/@common/Input";
import FormLabel from "src/components/@common/FormLabel";
import ErrorSpan from "src/components/@common/ErrorSpan";
import useAutoFocus from "src/hooks/useAutoFocus";
import { Styled as S } from "./CardPassword.styles";
import { NUMBERS, PASSWORD_NUMBER_TYPES } from "src/utils/constant";
import { lengthMatchValidation } from "src/utils/validation";
import useCardInfoInput from "src/hooks/useCardInfoInput";
import { CardPasswordObj } from "src/interfaces";

function CardPassword() {
  const { MAX_PASSWORD, EACH_PASSWORD } = NUMBERS;
  const { refs, nextInputFocus } = useAutoFocus({
    maxLength: EACH_PASSWORD,
  });

  const { value, onChange, error } = useCardInfoInput<CardPasswordObj>({
    contextType: "password",
    validation: (value) => {
      const firstVal = refs.current[0]?.value ?? "";
      const secondVal = refs.current[1]?.value ?? "";
      const passwordVal = firstVal + secondVal;

      lengthMatchValidation(passwordVal, MAX_PASSWORD);
    },
    nextInputFocus,
  });

  const inputs = PASSWORD_NUMBER_TYPES.map((key, idx) => (
    <Input
      key={key}
      data-order={key}
      data-index={idx}
      value={value[key]}
      onChange={onChange}
      maxLength={EACH_PASSWORD}
      inputmode="numeric"
      type="password"
      customInputStyle={S.PasswordInput}
      placeholder="•"
      ref={(el) => (refs.current[idx] = el as HTMLInputElement)}
    />
  ));

  return (
    <S.CardPasswordContainer>
      <FormLabel>{"카드 비밀번호"}</FormLabel>
      <S.PasswordInputContainer>
        {inputs}
        <S.DotParagraph>•</S.DotParagraph>
        <S.DotParagraph>•</S.DotParagraph>
      </S.PasswordInputContainer>
      {error.isError && <ErrorSpan>{error.message}</ErrorSpan>}
    </S.CardPasswordContainer>
  );
}

export default CardPassword;
