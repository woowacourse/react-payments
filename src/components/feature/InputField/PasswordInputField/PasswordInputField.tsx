import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import {
  PASSWORD_INPUT_TYPE,
  PasswordInputType,
} from '../../../../config/inputField';
import { useInputErrorHandler } from '../../../../hooks/useInputErrorHandler';
import { useInputFieldHandler } from '../../../../hooks/useInputFieldHandler';
import Input from '../../../ui/Input/Input';
import BaseInputField from '../../../ui/BaseInputField/BaseInputField';

interface PasswordInputFieldProps {
  inputValue: Record<PasswordInputType, string>;
  setInputValue: Dispatch<SetStateAction<Record<PasswordInputType, string>>>;
  onComplete: (isComplete: boolean) => void;
}

const MAX_PASSWORD_LENGTH = 2;

function PasswordInputField({
  inputValue,
  setInputValue,
  onComplete,
}: PasswordInputFieldProps) {
  const { errorTypes, errorMessage, isComplete, validateInputError } =
    useInputErrorHandler(
      [...PASSWORD_INPUT_TYPE],
      inputValue,
      MAX_PASSWORD_LENGTH
    );

  const { onChange, onBlur } = useInputFieldHandler({
    validateInputError,
    setInputValue,
    inputErrorType: 'shortPasswordSegment',
    maxLength: MAX_PASSWORD_LENGTH,
  });

  onComplete?.(isComplete && !Boolean(errorMessage));

  return (
    <BaseInputField label="비밀번호 앞 2자리" errorMessage={errorMessage}>
      {PASSWORD_INPUT_TYPE.map((inputType) => (
        <>
          <Label htmlFor="password-input" />
          <Input
            id="password-input"
            inputType="password"
            placeholder="비밀번호 앞 2자리"
            value={inputValue.passwordPart1}
            onChange={onChange}
            name="passwordPart1"
            onBlur={onBlur}
            isError={Boolean(errorTypes[inputType].length)}
          />
        </>
      ))}
    </BaseInputField>
  );
}

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
