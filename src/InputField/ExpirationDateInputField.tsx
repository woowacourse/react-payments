import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import BaseInputField from '../BaseInputField';
import Input from '../Input';
import { ExpirationDateInputType } from '../config/inputField';

function ExpirationDateInputField({
  inputValue,
  setInputValue,
}: {
  inputValue: Record<ExpirationDateInputType, string>;
  setInputValue: Dispatch<
    SetStateAction<Record<ExpirationDateInputType, string>>
  >;
}) {
  const onChange = ({ name, value }: { name: string; value: string }) => {
    if (value.length <= 2) {
      if (name === 'expirationDatePart1' && Number(value) > 12) return;
      setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
    }
  };

  const onBlur = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    if (value.length === 1)
      setInputValue({ ...inputValue, [name]: `0${value}` });
  };

  return (
    <BaseInputField label="유효기간">
      <Input
        type="number"
        placeholder="MM"
        value={inputValue.expirationDatePart1}
        onChange={onChange}
        name="expirationDatePart1"
        onBlur={onBlur}
      />
      <Input
        type="number"
        placeholder="YY"
        value={inputValue.expirationDatePart2}
        onChange={onChange}
        name="expirationDatePart2"
        onBlur={onBlur}
      />
    </BaseInputField>
  );
}

export default ExpirationDateInputField;
