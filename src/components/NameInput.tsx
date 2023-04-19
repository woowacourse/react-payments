import { ChangeEventHandler, useState } from 'react';
import Input from './Input/Input';

const NOT_ALPHABET_REGEX = /[^A-Za-z]/gi;

function NameInput() {
  const [name, setName] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value.replace(NOT_ALPHABET_REGEX, '').toUpperCase();

    setName(value);
  };

  return (
    <>
      <Input
        value={name}
        type="text"
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요"
        onChange={handleChange}
      />
    </>
  );
}

export default NameInput;
