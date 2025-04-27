import styled from 'styled-components';
import {
  PASSWORD_INPUT_TYPE,
  PasswordInputType,
} from '../../../../config/inputField';
import { useInputError } from '../../../../hooks/useInputError';
import { useInputFieldHandler } from '../../../../hooks/useInputFieldHandler';
import BaseInputField from '../../../ui/BaseInputField/BaseInputField';
import Input from '../../../ui/Input/Input';
import { InputFieldProps } from '../InputfieldProps';
import { useFieldCompletion } from '../../../../hooks/useFieldCompletion';
import { useRef } from 'react';

function PasswordInputField({
  inputValue,
  setInputValue,
  onComplete,
}: InputFieldProps<PasswordInputType>) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { errorTypes, errorMessage, validateInputError } = useInputError({
    inputValue,
  });

  const { onChange, onBlur } = useInputFieldHandler({
    hasError: Boolean(errorMessage),
    fieldName: 'password',
    inputRefs,
    setInputValue,
    validateInputError,
  });

  useFieldCompletion({
    fieldName: 'password',
    inputValue,
    errorMessage,
    onComplete,
  });

  return (
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
