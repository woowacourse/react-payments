import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import {
  EXPIRATION_DATE_INPUT_PLACEHOLDER,
  EXPIRATION_DATE_INPUT_TYPE,
  ExpirationDateInputType,
} from '../../../../config/inputField';
import BaseInputField from '../../../ui/BaseInputField/BaseInputField';
import Input from '../../../ui/Input/Input';
import styled from 'styled-components';

interface ExpirationDateInputFieldProps {
  inputValue: Record<ExpirationDateInputType, string>;
  setInputValue: Dispatch<
    SetStateAction<Record<ExpirationDateInputType, string>>
  >;
  onComplete: (isComplete: boolean) => void;
}

const MAX_DATE_LENGTH = 2;
const MAX_MONTH_VALUE = 12;

function ExpirationDateInputField({
  inputValue,
  setInputValue,
  onComplete,
}: ExpirationDateInputFieldProps) {
  const isComplete = !Boolean(
    Object.values(inputValue).filter(
      (cardNumberValue) => cardNumberValue.length !== MAX_DATE_LENGTH
    ).length
  );

  onComplete?.(isComplete);

  const onExpirationDateChange = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    if (value.length <= MAX_DATE_LENGTH) {
      if (name === 'expirationDatePart1' && Number(value) > MAX_MONTH_VALUE)
        return;
      setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
    }
  };

  const onExpirationDateBlur = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    if (value.length === 1)
      setInputValue((prevValue) => ({ ...prevValue, [name]: `0${value}` }));
  };

  return (
    <BaseInputField label="유효기간">
      {EXPIRATION_DATE_INPUT_TYPE.map((inputType) => (
        <>
          <Label htmlFor={`expiration-date-${inputType}`} />
          <Input
            id={`expiration-date-${inputType}`}
            key={inputType}
            inputType="number"
            placeholder={EXPIRATION_DATE_INPUT_PLACEHOLDER[inputType]}
            value={inputValue[inputType]}
            onChange={onExpirationDateChange}
            name={inputType}
            onBlur={onExpirationDateBlur}
          />
        </>
      ))}
    </BaseInputField>
  );
}

const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export default ExpirationDateInputField;
