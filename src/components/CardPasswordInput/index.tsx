import { useState } from 'react';
import styled from 'styled-components';
import { CARD_META_INFO, INPUT_RULES, VALIDATION_MESSAGES } from '../../constants/card-app';
import Label from '../common/Label';
import Input from '../common/Input';

interface CardPasswordInputProps {
  cardPassword: string;
  errorCaption: (errorText: string) => JSX.Element;
  onCardPasswordChange: (value: string) => void;
}

const CardPasswordInput = ({ cardPassword, errorCaption, onCardPasswordChange }: CardPasswordInputProps) => {
  const [isError, setIsError] = useState<boolean>(false);

  const handleInputChange = (value: string) => {
    const isNumberInput = /^[0-9]*$/.test(value);
    const isValidCardPassword = value.length <= INPUT_RULES.maxCardPasswordLength;

    setIsError(!isNumberInput);
    if (!isNumberInput || !isValidCardPassword) return;

    onCardPasswordChange(value);
  };

  return (
    <InputField>
      <Label htmlFor='card-password'>{CARD_META_INFO.cardPassword.label}</Label>
      <Input
        id='card-password'
        type='password'
        placeholder='••'
        value={cardPassword}
        size='large'
        isError={isError}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      />
      {isError ? errorCaption(VALIDATION_MESSAGES.invalidPassword) : errorCaption('')}
    </InputField>
  );
};

const InputField = styled.section`
  height: 77px;
  width: 315px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 16px;
  margin-bottom: 16px;
`;

export default CardPasswordInput;
