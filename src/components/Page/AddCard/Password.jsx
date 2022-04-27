import React from "react";
import styled from "styled-components";
import FieldSet from "../../FieldSet";
import Input from "../../Input";
import DotMark from "../../DotMark";

const Password = ({
  firstPassword,
  secondPassword,
  onChangeFirstPassword,
  onChangeSecondPassword,
}) => {
  return (
    <FieldSet
      id="password"
      description="카드 비밀번호"
      errorMessage="올바른 비밀번호를 입력해주세요."
    >
      {
        <PasswordInputContainer>
          <Input
            type="password"
            id="password"
            size="small"
            maxLength={1}
            value={firstPassword}
            onChange={onChangeFirstPassword}
          />
          <Input
            type="password"
            id="password"
            size="small"
            maxLength={1}
            value={secondPassword}
            onChange={onChangeSecondPassword}
          />
          <DotMark />
          <DotMark />
        </PasswordInputContainer>
      }
    </FieldSet>
  );
};

const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default Password;
