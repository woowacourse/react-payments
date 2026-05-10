import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import Label from '../Label/Label';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { InputFieldConfig } from '../../../types';
import InputField from '../InputField/InputField';
import { validateNaN } from '../../../utils/validate';

interface Props {
  fields: {
    value: string;
    error: boolean;
    errorMessage: string;
    touched: boolean;
  }[];
  fieldConfig: InputFieldConfig;
  onChanges: ((e: ChangeEvent<HTMLInputElement>) => void)[];
}

export default function InputFieldForm({ fields, fieldConfig, onChanges }: Props) {
  const [activeFieldIdx, setActiveFieldIdx] = useState<number | null>(null);

  if (fields.length !== fieldConfig.placeholder.length || fields.length !== onChanges.length) {
    console.error(`필드의 개수가 일치하지 않습니다`);
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
  ) => {
    if (validateNaN(e.target.value)) return;
    onChange(e);
  };

  const errorMessage = activeFieldIdx ? fields[activeFieldIdx].errorMessage : '';

  return (
    <FormContainer>
      <Label htmlFor={fieldConfig.id}>{fieldConfig.label}</Label>

      <InputFieldWrapper>
        {fields.map(({ value, error, touched }, index) => (
          <InputField
            key={index}
            isError={touched && error}
            id={index === 0 ? fieldConfig.id : `${fieldConfig.id}-${index}`}
            type="text"
            maxLength={fieldConfig.maxLength}
            inputMode="numeric"
            autoComplete="off"
            value={value}
            placeholder={fieldConfig.placeholder[index]}
            onChange={(e) => handleChange(e, onChanges[index])}
            onFocus={() => setActiveFieldIdx(index)}
            onBlur={() => setActiveFieldIdx(null)}
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
