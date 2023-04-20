import React from 'react';
import InputSection from '../Box/InputSection';
import InputBox from '../Common/InputBox';
import { InputStateProps } from '../../types';
import styled from 'styled-components';

interface CardPasswordInputProps {
  cardPassword1Props: InputStateProps;
  cardPassword2Props: InputStateProps;
}

const CardPasswordInput = ({ cardPassword1Props, cardPassword2Props }: CardPasswordInputProps) => {
  const inputs = [{ type: 'password', maxLength: 1, required: true, textSecurity: true }];
  return (
    <InputSection label="카드 번호">
      <InputBox inputs={inputs} align="center" {...cardPassword1Props} />
      <InputBox inputs={inputs} align="center" {...cardPassword2Props} />
      <PasswordPlaceholder>∙</PasswordPlaceholder>
      <PasswordPlaceholder>∙</PasswordPlaceholder>
    </InputSection>
  );
};

export default CardPasswordInput;

const PasswordPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 48.75px;

  font-size: 20px;
  color: #000000;
  -webkit-text-security: disc;
`;
