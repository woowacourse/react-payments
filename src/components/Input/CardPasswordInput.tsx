import React from 'react';
import InputSection from '../InputSection';
import InputBox from '../InputBox';
import { InputStateProps } from '../../types';

interface CardPasswordInputProps {
  cardPassword1Props: InputStateProps;
  cardPassword2Props: InputStateProps;
}

const CardPasswordInput = ({ cardPassword1Props, cardPassword2Props }: CardPasswordInputProps) => {
  const inputs = [{ type: 'password', maxLength: 1, security: true }];
  return (
    <InputSection label="카드 번호">
      <InputBox inputs={inputs} align="center" {...cardPassword1Props} />
      <InputBox inputs={inputs} align="center" {...cardPassword2Props} />
    </InputSection>
  );
};

export default CardPasswordInput;
