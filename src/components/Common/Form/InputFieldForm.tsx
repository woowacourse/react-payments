import styled from '@emotion/styled';
import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import Label from '../Label/Label';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { InputFieldConfig } from '../../../types/field';
import InputField from '../InputField/InputField';
import { validateNaN } from '../../../utils/validate';

interface Props {
  fields: {
    value: string;
    touched: boolean;
    maxLength: number;
    error: boolean;
    errorMessage: string;
  }[];
  fieldConfig: InputFieldConfig;
  onChanges: ((e: ChangeEvent<HTMLInputElement>) => void)[];
}

export default function InputFieldForm({ fields, fieldConfig, onChanges }: Props) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [activeFieldIdx, setActiveFieldIdx] = useState<number | null>(null);

  const errorMessage = activeFieldIdx !== null ? fields[activeFieldIdx].errorMessage : '';

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    maxLength: number
  ) => {
    if (validateNaN(e.target.value)) return;
    onChange(e);

    if (e.target.value.length === maxLength) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (
      index !== 0 &&
      fields[index].value.length === 0 &&
      (e.key === 'Backspace' || e.key === 'ArrowLeft')
    ) {
      inputRefs.current[index - 1]?.focus();
    }

    if (index !== fields.length - 1 && fields[index].value.length === 0 && e.key === 'ArrowRight') {
      inputRefs.current[index + 1]?.focus();
    }
  };

  if (fields.length !== fieldConfig.placeholder.length || fields.length !== onChanges.length) {
    console.error(`필드의 개수가 일치하지 않습니다`);
  }

  return (
    <FormContainer>
      <Label htmlFor={fieldConfig.id}>{fieldConfig.label}</Label>

      <InputFieldWrapper>
        {fields.map(({ value, touched, maxLength, error }, index) => (
          <InputField
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            autoFocus={index === 0}
            key={index}
            isError={touched && error}
            id={index === 0 ? fieldConfig.id : `${fieldConfig.id}-${index}`}
            type={fieldConfig.type}
            maxLength={maxLength}
            inputMode="numeric"
            autoComplete="off"
            value={value}
            placeholder={fieldConfig.placeholder[index]}
            onChange={(e) => handleChange(e, index, onChanges[index], maxLength)}
            onFocus={() => setActiveFieldIdx(index)}
            onBlur={() => setActiveFieldIdx(null)}
            onKeyDown={(e) => handleKeyDown(e, index)}
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
