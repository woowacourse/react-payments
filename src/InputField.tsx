import { ChangeEvent, useState } from 'react';
import Input from './Input';

type inputType = '카드 번호' | '유효기간' | 'CVC';

function InputField({ type }: { type: inputType }) {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  };

  return (
    <Input
      placeholder="1234"
      isError={false}
      value={value}
      onChange={onChange}
    ></Input>
  );
}

export default InputField;
