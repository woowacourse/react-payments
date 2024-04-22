import { useRef, useState } from 'react';
import Label from '../common/Label';
import styled from 'styled-components';
import Input from '../common/Input';
import { CARD_META_INFO, INPUT_RULES } from '../../constants/card-app';

import cardInputValidator from '../../validators/cardInputValidator';
import { VALIDATION_MESSAGES } from '../../constants/card-app';

interface ExpirationDateInputProps {
  expirationDate: string[];
  errorCaption: (errorText: string) => JSX.Element;
  onExpirationDateChange: (index: number, value: string) => void;
}

const ExpirationDateInput = ({ expirationDate, errorCaption, onExpirationDateChange: handleExpirationDateChange }: ExpirationDateInputProps) => {
  const [inputErrors, setInputErrors] = useState<boolean[]>(Array.from<boolean>({ length: expirationDate.length }).fill(false));

  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (index: number, value: string) => {
    const isNumericInput = /^(\d*)$/.test(value);

    if (!monthRef.current || !yearRef.current) return;

    const isValidDate = cardInputValidator.validateExpiration([monthRef.current.value, yearRef.current.value]);

    setInputErrors((prevErrors) => {
      const newPrevErrors = [...prevErrors];
      newPrevErrors[index] = !isValidDate || !isNumericInput;

      return newPrevErrors;
    });

    if (!isNumericInput) return;

    if (isValidDate) {
      const newErrors = Array.from<boolean>({
        length: expirationDate.length,
      }).fill(false);

      setInputErrors(newErrors);
    }

    handleExpirationDateChange(index, value);
  };

  const hasErrorInput = () => inputErrors.some((error) => error);

  return (
    <InputField>
      <Label htmlFor='expiration-date'>{CARD_META_INFO.expirationDate.label}</Label>
      <InputContainer>
        <Input
          ref={monthRef}
          id='expiration-date'
          type='text'
          placeholder='MM'
          value={expirationDate[0]}
          maxLength={INPUT_RULES.maxExpirationDateLength}
          size='medium'
          isError={inputErrors[0]}
          onChange={(e) => {
            handleInputChange(0, e.target.value);
          }}
        />
        <Input
          ref={yearRef}
          type='text'
          placeholder='YY'
          value={expirationDate[1]}
          maxLength={INPUT_RULES.maxExpirationDateLength}
          size='medium'
          isError={inputErrors[1]}
          onChange={(e) => {
            handleInputChange(1, e.target.value);
          }}
        />
      </InputContainer>
      {hasErrorInput() ? errorCaption(VALIDATION_MESSAGES.invalidDate) : errorCaption('')}
    </InputField>
  );
};

export default ExpirationDateInput;

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
