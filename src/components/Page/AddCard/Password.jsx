import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FieldSet from 'components/FieldSet';
import Input from 'components/Input';
import DotMark from 'components/DotMark';

const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

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
      <PasswordInputContainer>
        <Input
          type="password"
          id="firstPassword"
          scale="small"
          maxLength={1}
          value={firstPassword}
          onChange={onChangeFirstPassword}
          data-testid="first-password"
        />
        <Input
          type="password"
          id="secondPassword"
          scale="small"
          maxLength={1}
          value={secondPassword}
          onChange={onChangeSecondPassword}
          data-testid="second-password"
        />
        <DotMark />
        <DotMark />
      </PasswordInputContainer>
    </FieldSet>
  );
};

Password.propTypes = {
  firstPassword: PropTypes.string,
  secondPassword: PropTypes.string,
  onChangeFirstPassword: PropTypes.func,
  onChangeSecondPassword: PropTypes.func,
  isError: PropTypes.bool,
};

export default Password;
