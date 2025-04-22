import { Dispatch, SetStateAction } from 'react';
import { CVCInputValueType } from '../../../config/inputField';
import BaseInputField from '../../BaseInputField/BaseInputField';
import Input from '../../Input/Input';
import styled from 'styled-components';

interface CVCInputFieldProps {
  inputValue: Record<CVCInputValueType, string>;
  setInputValue: Dispatch<SetStateAction<Record<CVCInputValueType, string>>>;
}

function CVCInputField({ inputValue, setInputValue }: CVCInputFieldProps) {
  const onChange = ({ name, value }: { name: string; value: string }) => {
    if (value.length <= 3)
      setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <BaseInputField label="CVC">
      <Label htmlFor="CVC-input" />
      <Input
        id="CVC-input"
        inputType="number"
        placeholder="123"
        value={inputValue.CVCPart1}
        onChange={onChange}
        name="CVCPart1"
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
