import styled from 'styled-components';
import {
  PASSWORD_INPUT_TYPE,
  PasswordInputType,
} from '../../../../config/inputField';
import { useInputFieldHandler } from '../../../../hooks/useInputFieldHandler';
import BaseInputField from '../../../ui/BaseInputField/BaseInputField';
import Input from '../../../ui/Input/Input';
import { InputFieldProps } from '../InputfieldProps';
import { useEffect, useRef } from 'react';
import InputSection from '../../../ui/InputSection/InputSection';
import { useFieldValidation } from '../../../../hooks/useFieldValidation';

function PasswordInputField({
  isFocused,
  inputValue,
  setInputValue,
  onComplete,
}: InputFieldProps<PasswordInputType>) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { errorTypes, errorMessage, validateInputError } = useFieldValidation({
    inputValue,
    fieldName: 'password',
    onComplete,
  });

  const { onChange, onBlur } = useInputFieldHandler({
    fieldName: 'password',
    inputRefs,
    setInputValue,
    validateInputError,
  });

  useEffect(() => {
    if (isFocused) {
      inputRefs.current[0]?.focus();
    }
  }, []);

  return (
    <InputSection
      title="비밀번호를 입력해 주세요"
      caption="앞의 2자리를 입력해주세요"
    >
      <BaseInputField label="비밀번호 앞 2자리" errorMessage={errorMessage}>
        {PASSWORD_INPUT_TYPE.map((inputType, index) => (
          <InputWrapper key={inputType}>
            <Label htmlFor="password-input" />
            <Input
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              id="password-input"
              inputType="password"
              placeholder="비밀번호 앞 2자리"
              value={inputValue.passwordPart1}
              onChange={onChange}
              name="passwordPart1"
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

export default PasswordInputField;
