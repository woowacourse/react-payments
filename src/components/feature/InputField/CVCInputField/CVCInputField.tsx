import styled from 'styled-components';
import {
  CVC_INPUT_TYPE,
  CVCInputValueType,
} from '../../../../config/inputField';
import { useInputFieldHandler } from '../../../../hooks/useInputFieldHandler';
import BaseInputField from '../../../ui/BaseInputField/BaseInputField';
import Input from '../../../ui/Input/Input';
import { InputFieldProps } from '../InputfieldProps';
import { useEffect, useRef } from 'react';
import InputSection from '../../../ui/InputSection/InputSection';
import { useFieldValidation } from '../../../../hooks/useFieldValidation';

function CVCInputField({
  isFocused,
  inputValue,
  setInputValue,
  onComplete,
}: InputFieldProps<CVCInputValueType>) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { errorTypes, errorMessage, validateInputError } = useFieldValidation({
    inputValue,
    fieldName: 'CVC',
    onComplete,
  });

  const { onChange, onBlur } = useInputFieldHandler({
    fieldName: 'CVC',
    inputRefs,
    validateInputError,
    setInputValue,
  });

  useEffect(() => {
    if (isFocused) {
      inputRefs.current[0]?.focus();
    }
  }, []);

  return (
    <InputSection title="CVC 번호를 입력해 주세요">
      <BaseInputField label="CVC" errorMessage={errorMessage}>
        {CVC_INPUT_TYPE.map((inputType, index) => (
          <InputWrapper key={inputType}>
            <Label htmlFor="CVC-input" />
            <Input
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              id="CVC-input"
              inputType="number"
              placeholder="123"
              value={inputValue.CVCPart1}
              onChange={onChange}
              name="CVCPart1"
              onBlur={onBlur}
              isError={Boolean(errorTypes[inputType].length)}
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

export default CVCInputField;
