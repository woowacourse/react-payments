import { ChangeEvent, useRef } from 'react';
import styled from 'styled-components';
import {
  EXPIRATION_DATE_INPUT_PLACEHOLDER,
  EXPIRATION_DATE_INPUT_TYPE,
  ExpirationDateInputType,
} from '../../../../config/inputField';
import BaseInputField from '../../../ui/BaseInputField/BaseInputField';
import Input from '../../../ui/Input/Input';
import { InputFieldProps } from '../Inputfield';
import { useFieldCompletion } from '../../../../hooks/useFieldCompletion';
import { useInputFieldHandler } from '../../../../hooks/useInputFieldHandler';

function ExpirationDateInputField({
  inputValue,
  setInputValue,
  onComplete,
}: InputFieldProps<ExpirationDateInputType>) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useFieldCompletion({
    fieldName: 'expirationDate',
    inputValue,
    onComplete,
  });

  const { onChange } = useInputFieldHandler({
    hasError: false,
    fieldName: 'expirationDate',
    inputRefs,
    setInputValue,
  });

  const onExpirationDateBlur = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    if (value.length === 1)
      setInputValue((prevValue) => ({ ...prevValue, [name]: `0${value}` }));
  };

  return (
    <BaseInputField label="유효기간">
      {EXPIRATION_DATE_INPUT_TYPE.map((inputType, index) => (
        <InputWrapper key={inputType}>
          <Label htmlFor={`expiration-date-${inputType}`} />
          <Input
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            id={`expiration-date-${inputType}`}
            inputType="number"
            placeholder={EXPIRATION_DATE_INPUT_PLACEHOLDER[inputType]}
            value={inputValue[inputType]}
            onChange={onChange}
            name={inputType}
            onBlur={onExpirationDateBlur}
          />
        </InputWrapper>
      ))}
    </BaseInputField>
  );
}

const InputWrapper = styled.div`
  width: 100%;
`;

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
