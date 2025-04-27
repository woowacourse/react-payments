import styled from 'styled-components';
import {
  CVC_INPUT_TYPE,
  CVCInputValueType,
} from '../../../../config/inputField';
import { useInputError } from '../../../../hooks/useInputError';
import { useInputFieldHandler } from '../../../../hooks/useInputFieldHandler';
import BaseInputField from '../../../ui/BaseInputField/BaseInputField';
import Input from '../../../ui/Input/Input';
import { InputFieldProps } from '../Inputfield';
import { useFieldCompletion } from '../../../../hooks/useFieldCompletion';

const MAX_CVC_LENGTH = 3;

function CVCInputField({
  inputValue,
  setInputValue,
  onComplete,
}: InputFieldProps<CVCInputValueType>) {
  const { errorTypes, errorMessage, isComplete, validateInputError } =
    useInputError({ inputValue, completeCondition: MAX_CVC_LENGTH });

  const { onChange, onBlur } = useInputFieldHandler({
    validateInputError,
    setInputValue,
    maxLength: MAX_CVC_LENGTH,
    inputErrorType: 'shortCVCSegment',
  });

  useFieldCompletion({
    onComplete,
    isComplete,
    errorMessage,
    fieldName: 'CVC',
  });

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
