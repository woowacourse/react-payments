import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import BaseInputField from '../../../common/BaseInputField/BaseInputField';
import Input from '../../../common/Input/Input';
import { EXPIRATION_DATE } from '../config/card';
import {
  EXPIRATION_DATE_INPUT_PLACEHOLDER,
  EXPIRATION_DATE_INPUT_TYPE,
  ExpirationDateInputType,
} from '../config/inputField';

interface ExpirationDateInputFieldProps {
  inputValue: Record<ExpirationDateInputType, string>;
  setInputValue: Dispatch<
    SetStateAction<Record<ExpirationDateInputType, string>>
  >;
}

function ExpirationDateInputField({
  inputValue,
  setInputValue,
}: ExpirationDateInputFieldProps) {
  const onChange = ({ name, value }: { name: string; value: string }) => {
    if (value.length <= EXPIRATION_DATE.length) {
      if (
        name === EXPIRATION_DATE_INPUT_TYPE.expirationDatePart1 &&
        Number(value) > EXPIRATION_DATE.month.max
      )
        return;
      setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
    }
  };

  const onBlur = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    if (value.length === EXPIRATION_DATE.padLeftThreshold)
      setInputValue({ ...inputValue, [name]: `0${value}` });
  };

  return (
    <BaseInputField label="유효기간">
      {Object.values(EXPIRATION_DATE_INPUT_TYPE).map((inputType) => (
        <Input
          key={inputType}
          inputType="number"
          placeholder={EXPIRATION_DATE_INPUT_PLACEHOLDER[inputType]}
          value={inputValue[inputType]}
          onChange={onChange}
          name={inputType}
          onBlur={onBlur}
        />
      ))}
    </BaseInputField>
  );
}

export default ExpirationDateInputField;
