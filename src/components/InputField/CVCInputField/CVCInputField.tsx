import { Dispatch, SetStateAction } from 'react';
import { CVCInputValueType } from '../../../config/inputField';
import BaseInputField from '../../BaseInputField/BaseInputField';
import Input from '../../Input/Input';

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
      <Input
        type="number"
        placeholder="123"
        value={inputValue.CVCPart1}
        onChange={onChange}
        name="CVCPart1"
      />
    </BaseInputField>
  );
}

export default CVCInputField;
