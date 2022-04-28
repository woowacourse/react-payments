import React from "react";
import styled from "styled-components";
import FieldSet from "../../FieldSet";
import Input from "../../Input";
import DotMark from "../../DotMark";
import PropTypes from "prop-types";

const Password = ({
  firstPassword,
  secondPassword,
  onChangeFirstPassword,
  onChangeSecondPassword,
  isError,
}) => {
  return (
    <FieldSet
      id="password"
      description="카드 비밀번호"
      errorMessage="올바른 비밀번호를 입력해주세요."
      isError={isError}
    >
      {
        <PasswordInputContainer>
          <Input
            type="password"
            id="firstPassword"
            scale="small"
            maxLength={1}
            value={firstPassword}
            onChange={onChangeFirstPassword}
          />
          <Input
            type="password"
            id="secondPassword"
            scale="small"
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

Password.propType = {
  firstPassword: PropTypes.string,
  secondPassword: PropTypes.string,
  onChangeFirstPassword: PropTypes.func,
  onChangeSecondPassword: PropTypes.func,
  isError: PropTypes.bool,
};

const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default Password;
