import { useState } from 'react';

import Label from '../common/Label';
import Input from '../common/Input';
import { CARD_META_INFO, INPUT_RULES } from '../../constants/card-app';

import styled from 'styled-components';
import { VALIDATION_MESSAGES } from '../../constants/card-app';

interface CardNumberInputProps {
  cardNumbers: string[];
  errorCaption: (text: string) => JSX.Element;
  onCardNumberChange: (index: number, value: string) => void;
}

const CardNumberInput = ({ cardNumbers, errorCaption, onCardNumberChange: handleCardNumberChange }: CardNumberInputProps) => {
  const [inputErrors, setInputErrors] = useState<boolean[]>(Array.from<boolean>({ length: cardNumbers.length }).fill(false));

  const handleInputChange = (index: number, value: string) => {
    const isNumericInput = /^(\d*)$/.test(value);
    const isValidateCardNumber = value.length === 4;

    setInputErrors((prevErrors) => {
      const newPrevErrors = [...prevErrors];
      newPrevErrors[index] = !isNumericInput || !isValidateCardNumber;

      return newPrevErrors;
    });

    if (!isNumericInput) return;

    handleCardNumberChange(index, value);
  };

  const hasErrorInput = inputErrors.some((error) => error);

  return (
    <InputField>
      <Label htmlFor='card-number'>{CARD_META_INFO.cardNumbers.label}</Label>
      <InputContainer>
        {Array.from({ length: cardNumbers.length }, (_, index) => (
          <Input
            key={`input-${index}`}
            id={index === 0 ? 'card-number' : ''}
            type='text'
            placeholder='1234'
            value={cardNumbers[index]}
            maxLength={INPUT_RULES.maxCardNumberPartLength}
            size='small'
            isError={inputErrors[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </InputContainer>
      {hasErrorInput ? errorCaption(VALIDATION_MESSAGES.onlyNumbersAllowed) : errorCaption('')}
    </InputField>
  );
};

export default CardNumberInput;

const InputField = styled.section`
  height: 77px;
  width: 315px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 16px;
  margin-bottom: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
