import styled from 'styled-components';
import BaseInputField from '../../BaseInputField/BaseInputField';
import Input from '../../Input/Input';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { ERROR_TYPE_TO_MESSAGE, ErrorType } from '../../../config/error';
import { PasswordInputType } from '../../../config/inputField';

interface PasswordInputFieldProps {
  inputValue: Record<PasswordInputType, string>;
  setInputValue: Dispatch<SetStateAction<Record<PasswordInputType, string>>>;
  onComplete: () => void;
}

const MAX_PASSWORD_LENGTH = 2;

function PasswordInputField({
  inputValue,
  setInputValue,
  onComplete,
}: PasswordInputFieldProps) {
  const [errorTypes, setErrorTypes] = useState<ErrorType[]>([]);

  const errorMessage =
    errorTypes?.length !== 0 ? ERROR_TYPE_TO_MESSAGE[errorTypes[0]] : '';

  const isComplete = !Boolean(
    Object.values(inputValue).filter(
      (cardNumberValue) => cardNumberValue.length !== MAX_PASSWORD_LENGTH
    ).length
  );
  if (isComplete && !errorMessage) onComplete?.();

  const onChange = ({ name, value }: { name: string; value: string }) => {
    if (value.length <= MAX_PASSWORD_LENGTH)
      setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const onBlur = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    const isValidLength = value.length === MAX_PASSWORD_LENGTH;

    if (!isValidLength) {
      const set = new Set(errorTypes);
      set.add('shortPasswordSegment');
      setErrorTypes(() => Array.from(set));
    } else {
      setErrorTypes(() =>
        errorTypes.filter((errorType) => errorType !== 'shortPasswordSegment')
      );
    }
  };
  return (
    <BaseInputField label="비밀번호 앞 2자리" errorMessage={errorMessage}>
      <Label htmlFor="password-input" />
      <Input
        id="password-input"
        inputType="password"
        placeholder="비밀번호 앞 2자리"
        value={inputValue.passwordPart1}
        onChange={onChange}
        name="passwordPart1"
        onBlur={onBlur}
        isError={Boolean(errorTypes.length)}
      />
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
