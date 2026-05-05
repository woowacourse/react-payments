import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import FormField from './FormField';
import Label from '../Label/Label';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { InputFieldConfig } from '../../../types';

interface InputFieldFormProps {
  fieldConfig: InputFieldConfig;
  valueList: string[];
  validator: (inputValue: string, index: number) => { error: boolean; errorMessage: string };
  onChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
}

export default function InputFieldForm({
  fieldConfig,
  valueList,
  validator,
  onChange,
}: InputFieldFormProps) {
  const [errorMessage, setErrorMessage] = useState<string>('');

  return (
    <FormContainer>
      <Label htmlFor={fieldConfig.id}>{fieldConfig.label}</Label>

      <InputFieldWrapper>
        {valueList.map((value, index) => (
          <FormField
            key={index}
            id={index === 0 ? fieldConfig.id : `${fieldConfig.id}-${index}`}
            index={index}
            value={value}
            validator={validator}
            fieldMaxLength={fieldConfig.maxLength}
            placeholder={fieldConfig.placeholder[index]}
            setErrorMessage={setErrorMessage}
            onChange={onChange}
          />
        ))}
      </InputFieldWrapper>

      {errorMessage.length > 0 && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
