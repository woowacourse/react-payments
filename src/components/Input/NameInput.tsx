import { Input } from 'components/common';
import { ChangeEventHandler } from 'react';

export interface NameInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function NameInput({ value, onChange }: NameInputProps) {
  return (
    <>
      <Input
        value={value}
        type="text"
        maxLength={30}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요"
        onChange={onChange}
      />
    </>
  );
}
