import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import {
  CVC_INPUT_TYPE,
  CVCInputValueType,
} from '../../../../config/inputField';
import { useInputErrorHandler } from '../../../../hooks/useInputErrorHandler';
import Input from '../../../ui/Input/Input';
import BaseInputField from '../../BaseInputField/BaseInputField';

interface CVCInputFieldProps {
  inputValue: Record<CVCInputValueType, string>;
  setInputValue: Dispatch<SetStateAction<Record<CVCInputValueType, string>>>;
  onComplete: (isComplete: boolean) => void;
}

const MAX_CVC_LENGTH = 3;

function CVCInputField({
  inputValue,
  setInputValue,
  onComplete,
}: CVCInputFieldProps) {
  const { errorTypes, errorMessage, isComplete, validateInputError } =
    useInputErrorHandler([...CVC_INPUT_TYPE], inputValue, MAX_CVC_LENGTH);

  onComplete?.(isComplete && !Boolean(errorMessage));

  const onChange = ({ name, value }: { name: string; value: string }) => {
    if (value.length > MAX_CVC_LENGTH) return;
    setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const onBlur = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;

    validateInputError(name as CVCInputValueType, {
      errorType: 'shortCVCSegment',
      isError: value.length < MAX_CVC_LENGTH,
    });
  };

  return (
    <BaseInputField label="CVC" errorMessage={errorMessage}>
      {CVC_INPUT_TYPE.map((inputType) => (
        <>
          <Label htmlFor="CVC-input" />
          <Input
            id="CVC-input"
            inputType="number"
            placeholder="123"
            value={inputValue.CVCPart1}
            onChange={onChange}
            name="CVCPart1"
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

export default CVCInputField;
