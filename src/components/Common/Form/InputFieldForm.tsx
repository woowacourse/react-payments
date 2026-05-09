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
  onChanges: ((e: ChangeEvent<HTMLInputElement>) => void)[];
}

export default function InputFieldForm({
  fieldConfig,
  valueList,
  validator,
  onChanges,
}: InputFieldFormProps) {
  const [errorMessage, setErrorMessage] = useState<string>('');

  if (
    valueList.length !== fieldConfig.placeholder.length ||
    valueList.length !== onChanges.length
  ) {
    console.error(`필드의 개수가 일치하지 않습니다`);
  }

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
            onChange={onChanges[index]}
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
  height: 77px;
`;

const InputFieldWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
