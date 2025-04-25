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
  const { errorTypes, setErrorTypes, errorMessage, isComplete } =
    useInputErrorHandler([...CVC_INPUT_TYPE], inputValue, MAX_CVC_LENGTH);

  onComplete?.(isComplete && !Boolean(errorMessage));

  const onChange = ({ name, value }: { name: string; value: string }) => {
    if (value.length <= MAX_CVC_LENGTH)
      setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const onBlur = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    const isValidLength = value.length === MAX_CVC_LENGTH;

    const currentErrorType = errorTypes['CVCPart1'];

    if (!isValidLength) {
      const set = new Set(currentErrorType);
      set.add('shortCVCSegment');
      setErrorTypes(() => ({ ['CVCPart1']: Array.from(set) }));
    } else {
      setErrorTypes(() => ({
        ['CVCPart1']: currentErrorType.filter(
          (errorType) => errorType !== 'shortCVCSegment'
        ),
      }));
    }
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
