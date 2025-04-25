import styled from 'styled-components';
import BaseInputField from '../../BaseInputField/BaseInputField';
import Input from '../../../ui/Input/Input';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { ERROR_TYPE_TO_MESSAGE, ErrorType } from '../../../../config/error';
import {
  PASSWORD_INPUT_TYPE,
  PasswordInputType,
} from '../../../../config/inputField';
import { useInputErrorHandler } from '../../../../hooks/useInputErrorHandler';

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
  const { errorTypes, setErrorTypes, errorMessage, isComplete } =
    useInputErrorHandler(
      [...PASSWORD_INPUT_TYPE],
      inputValue,
      MAX_PASSWORD_LENGTH
    );

  onComplete?.(isComplete && !Boolean(errorMessage));

  const onChange = ({ name, value }: { name: string; value: string }) => {
    if (value.length <= MAX_PASSWORD_LENGTH)
      setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const onBlur = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    const isValidLength = value.length === MAX_PASSWORD_LENGTH;

    const currentErrorType = errorTypes['passwordPart1'];

    if (!isValidLength) {
      const set = new Set(currentErrorType);
      set.add('shortPasswordSegment');
      setErrorTypes(() => ({ ['passwordPart1']: Array.from(set) }));
    } else {
      setErrorTypes(() => ({
        ['passwordPart1']: currentErrorType.filter(
          (errorType) => errorType !== 'shortPasswordSegment'
        ),
      }));
    }
  };
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
