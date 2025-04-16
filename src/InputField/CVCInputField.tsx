import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import BaseInputField from '../BaseInputField';
import Input from '../Input';
import { CVCInputValueType } from '../types/inputFieldType';

function CVCInputField({
  inputValue,
  setInputValue,
}: {
  inputValue: Record<CVCInputValueType, string>;
  setInputValue: Dispatch<SetStateAction<Record<CVCInputValueType, string>>>;
}) {
  const onChange = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    const numericValue = value.replace(/[^0-9]/g, '');

    if (numericValue.length <= 3)
      setInputValue((prevValue) => ({ ...prevValue, [name]: numericValue }));
  };

  return (
    <BaseInputField label="CVC">
      <Input
        inputMode="numeric"
        placeholder="123"
        value={inputValue.CVCPart1}
        onChange={onChange}
        name="CVCPart1"
      />
    </BaseInputField>
  );
}

export default CVCInputField;
