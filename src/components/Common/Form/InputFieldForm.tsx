import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import FormField from './FormField';
import { CardNumbersType, ExpirationDateType } from '../../Form/PaymentForm';
import Label from '../Label/Label';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { InputFieldConfig } from '../../../types';

interface InputFieldFormProps<T extends CardNumbersType | ExpirationDateType | string> {
  fieldConfig: InputFieldConfig;
  value: T;
  validator: (inputValue: string, index: number) => { error: boolean; errorMessage: string };
  onChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
}

export default function InputFieldForm<T extends CardNumbersType | ExpirationDateType | string>({
  fieldConfig,
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
      <Label htmlFor={fieldConfig.id}>{fieldConfig.label}</Label>

      <InputFieldWrapper>
        {numberList.map((numbers, index) => (
          <FormField
            key={index}
            id={index === 0 ? fieldConfig.id : String(index)}
            index={index}
            numbers={numbers}
            fieldMaxLength={fieldConfig.maxLength}
            validator={validator}
            onChange={onChange}
            placeholder={fieldConfig.placeholder[index]}
            setErrorMessage={setErrorMessage}
          />
        ))}
      </InputFieldWrapper>

      {errorMessage.trim().length > 0 && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
