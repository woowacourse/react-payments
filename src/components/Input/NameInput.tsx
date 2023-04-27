import { Input } from 'components/common';
import { ChangeEventHandler } from 'react';
import { ValueAndOnChange } from './types';

export interface NameInputProps extends ValueAndOnChange {}

const NOT_ALPHABET_REGEX = /[^A-Za-z\s]/gi;

export function NameInput({ value, onChange }: NameInputProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value.replace(NOT_ALPHABET_REGEX, '').toUpperCase();
    onChange?.(value);
  };

  return (
    <>
      <Input
        value={value}
        type="text"
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요"
        onChange={handleChange}
      />
    </>
  );
}
