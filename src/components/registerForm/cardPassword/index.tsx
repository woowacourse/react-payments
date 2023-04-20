import React, { useState, useContext } from "react";
import Input from "src/components/@common/Input";
import FormLabel from "src/components/@common/FormLabel";
import { ONLY_NUMBER_REGEXP } from "src/utils/regexp";
import styled, { css } from "styled-components";
import { InputValuesContext } from "../Main";
import ErrorSpan from "src/components/@common/ErrorSpan";

interface CardPasswordObj {
  first: string;
  second: string;
}

function CardPassword() {
  const [cardInput, setCardInput] = useContext(InputValuesContext);

  const [passwordError, setPasswordError] = useState(false);

  const passwordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const value = event.currentTarget.value as string;
    const name = event.currentTarget.dataset["order"] as keyof CardPasswordObj;
    if (!ONLY_NUMBER_REGEXP.test(value)) return;

    try {
      if (value.length !== 1) {
        throw new Error();
      }
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
  };

  return (
    <CardPasswordContainer>
      <FormLabel>{"카드 비밀번호"}</FormLabel>
      <PasswordInputContainer>
        <Input
          data-order="first"
          value={cardInput.password["first"]}
          onChange={passwordChange}
          maxLength={1}
          inputmode="numeric"
          type="password"
          customInputStyle={PasswordInput}
        />
        <Input
          data-order="second"
          value={cardInput.password["second"]}
          onChange={passwordChange}
          maxLength={1}
          inputmode="numeric"
          type="password"
          customInputStyle={PasswordInput}
        />
        <DotParagraph>•</DotParagraph>
        <DotParagraph>•</DotParagraph>
      </PasswordInputContainer>
      {passwordError && (
        <ErrorSpan>비밀번호 앞 2자리를 입력해주세요.</ErrorSpan>
      )}
    </CardPasswordContainer>
  );
}

export default CardPassword;

const CardPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
`;

const PasswordInput = css`
  width: 43px;

  text-align: center;
  font-size: 28px;
`;

const DotParagraph = styled.p`
  width: 43px;
  height: 45px;

  margin: 0;

  font-size: 28px;
  text-align: center;
`;
