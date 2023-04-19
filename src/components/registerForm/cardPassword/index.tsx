import React, { useState } from "react";
import Input from "src/components/@common/Input";
import FormLabel from "src/components/@common/FormLabel";
import { ONLY_NUMBER_REGEXP } from "src/utils/regexp";
import styled, { css } from "styled-components";

interface CardPasswordObj {
  first: string;
  second: string;
}

function CardPassword() {
  const [password, setPassword] = useState({
    first: "",
    second: "",
  });

  const passwordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const value = event.currentTarget.value as string;
    const name = event.currentTarget.dataset["order"] as keyof CardPasswordObj;
    if (!ONLY_NUMBER_REGEXP.test(value)) return;

    setPassword((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <CardPasswordContainer>
      <FormLabel>{"카드 비밀번호"}</FormLabel>
      <PasswordInputContainer>
        <Input
          data-order="first"
          value={password["first"]}
          onChange={passwordChange}
          maxLength={1}
          inputmode="numeric"
          type="password"
          customInputStyle={PasswordInput}
        />
        <Input
          data-order="second"
          value={password["second"]}
          onChange={passwordChange}
          maxLength={1}
          inputmode="numeric"
          type="password"
          customInputStyle={PasswordInput}
        />
        <DotParagraph>•</DotParagraph>
        <DotParagraph>•</DotParagraph>
      </PasswordInputContainer>
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
