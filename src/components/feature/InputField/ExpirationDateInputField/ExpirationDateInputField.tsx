import { ChangeEvent, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  EXPIRATION_DATE_INPUT_PLACEHOLDER,
  EXPIRATION_DATE_INPUT_TYPE,
  ExpirationDateInputType,
  InputFieldType,
} from '../../../../config/inputField';
import { useFieldCompletion } from '../../../../hooks/useFieldCompletion';
import {
  onChangeProps,
  useInputFieldHandler,
} from '../../../../hooks/useInputFieldHandler';
import BaseInputField from '../../../ui/BaseInputField/BaseInputField';
import Input from '../../../ui/Input/Input';
import InputSection from '../../../ui/InputSection/InputSection';
import { InputFieldProps } from '../InputfieldProps';

const MAX_VALID_MONTH = 12;

function ExpirationDateInputField({
  isFocused,
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
    fieldName: 'expirationDate',
    inputRefs,
    setInputValue,
  });

  const onExpirationDateChange = ({ value, name }: onChangeProps) => {
    if (name === 'expirationDatePart1' && Number(value) > MAX_VALID_MONTH)
      return;
    onChange({ value, name });
  };

  const onExpirationDateBlur = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    if (value.length === 1)
      setInputValue((prevValue) => ({ ...prevValue, [name]: `0${value}` }));
  };

  useEffect(() => {
    if (isFocused) {
      inputRefs.current[0]?.focus();
    }
  }, []);

  return (
    <InputSection
      title="카드 유효기간을 입력해 주세요"
      caption="월/년도(MMYY)를 순서대로 입력해 주세요."
    >
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
              onChange={onExpirationDateChange}
              name={inputType}
              onBlur={onExpirationDateBlur}
            />
          </InputWrapper>
        ))}
      </BaseInputField>
    </InputSection>
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
