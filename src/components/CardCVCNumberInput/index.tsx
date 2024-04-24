import styled from 'styled-components';
import Label from '../common/Label';
import Input from '../common/Input';
import { CARD_META_INFO, INPUT_RULES, VALIDATION_MESSAGES } from '../../constants/card-app';
import { useState } from 'react';

interface CardCVCNumberInputProps {
  cardCVCNumber: string;
  errorCaption: (errorText: string) => JSX.Element;
  onCardCVCNumberChange: (value: string) => void;
}

const CardCVCNumberInput = ({ cardCVCNumber, errorCaption, onCardCVCNumberChange }: CardCVCNumberInputProps) => {
  const [isError, setIsError] = useState<boolean>(false);

  const handleInputChange = (value: string) => {
    const isNumberInput = /^[0-9]*$/.test(value);
    const isValidCVCNumber = value.length <= INPUT_RULES.maxCardCVCNumberLength;

    setIsError(!isNumberInput);
    if (!isNumberInput || !isValidCVCNumber) return;

    onCardCVCNumberChange(value);
  };

  return (
    <InputField>
      <Label htmlFor='card-owner'>{CARD_META_INFO.cardCVCNumber.label}</Label>
      <Input
        id='card-cvc-number'
        type='text'
        placeholder='123'
        value={cardCVCNumber}
        size='large'
        isError={isError}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      />
      {isError ? errorCaption(VALIDATION_MESSAGES.invalidCVCNumber) : errorCaption('')}
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

export default CardCVCNumberInput;
