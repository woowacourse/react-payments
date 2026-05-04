import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import FormField from './FormField';
import { CardNumbersType, ExpirationDateType } from '../../Form/PaymentForm';
import Label from '../Label/Label';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface InputFieldFormProps<T extends CardNumbersType | ExpirationDateType | string> {
  id: string;
  label: string;
  placeholderArr: string[];
  fieldMaxLength: number;
  value: T;
  validator: (inputValue: string, index: number) => { error: boolean; errorMessage: string };
  onChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
}

export default function InputFieldForm<T extends CardNumbersType | ExpirationDateType | string>({
  id,
  label,
  placeholderArr,
  fieldMaxLength,
  value,
  validator,
  onChange,
}: InputFieldFormProps<T>) {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const convertValueToStringArray = (value: T): string[] => {
    if (typeof value === 'string') return [value];
    if (Array.isArray(value)) return value;
    return Object.values(value);
  };

  const numberList = convertValueToStringArray(value);

  return (
    <FormContainer>
      <Label htmlFor={id}>{label}</Label>

      <InputFieldWrapper>
        {numberList.map((_, index) => (
          <FormField
            key={`${label}-${index}`}
            id={index === 0 ? id : String(index)}
            index={index}
            numbers={numberList[index]}
            fieldMaxLength={fieldMaxLength}
            validator={validator}
            onChange={onChange}
            placeholder={placeholderArr[index]}
            setErrorMessage={setErrorMessage}
          />
        ))}
      </InputFieldWrapper>

      {<ErrorMessage>{errorMessage.trim().length > 0 && errorMessage}</ErrorMessage>}
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputFieldWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
