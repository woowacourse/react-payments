import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { CVCInputValueType } from '../../../config/inputField';
import BaseInputField from '../../BaseInputField/BaseInputField';
import Input from '../../Input/Input';
import styled from 'styled-components';
import { ERROR_TYPE_TO_MESSAGE, ErrorType } from '../../../config/error';

interface CVCInputFieldProps {
  inputValue: Record<CVCInputValueType, string>;
  setInputValue: Dispatch<SetStateAction<Record<CVCInputValueType, string>>>;
  onComplete: () => void;
}

const MAX_CVC_LENGTH = 3;

function CVCInputField({
  inputValue,
  setInputValue,
  onComplete,
}: CVCInputFieldProps) {
  const [errorTypes, setErrorTypes] = useState<ErrorType[]>([]);

  const errorMessage =
    errorTypes?.length !== 0 ? ERROR_TYPE_TO_MESSAGE[errorTypes[0]] : '';

  const isComplete = !Boolean(
    Object.values(inputValue).filter(
      (cardNumberValue) => cardNumberValue.length !== 4
    ).length
  );
  if (isComplete && !errorMessage) onComplete?.();

  const onChange = ({ name, value }: { name: string; value: string }) => {
    if (value.length <= MAX_CVC_LENGTH)
      setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const onBlur = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    const isValidLength = value.length === MAX_CVC_LENGTH;

    if (!isValidLength) {
      const set = new Set(errorTypes);
      set.add('shortCVCSegment');
      setErrorTypes(() => Array.from(set));
    } else {
      setErrorTypes(() =>
        errorTypes.filter((errorType) => errorType !== 'shortCVCSegment')
      );
    }
  };

  return (
    <BaseInputField label="CVC" errorMessage={errorMessage}>
      <Label htmlFor="CVC-input" />
      <Input
        id="CVC-input"
        inputType="number"
        placeholder="123"
        value={inputValue.CVCPart1}
        onChange={onChange}
        name="CVCPart1"
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

export default CVCInputField;
