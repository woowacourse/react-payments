import { Input } from 'components/common';
import { ChangeEventHandler } from 'react';
import { Styled as S } from './CardNameInput.styles';

export interface CardNameInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function CardNameInput({ value, onChange }: CardNameInputProps) {
  return (
    <S.CardNameInputWrapper>
      <Input
        value={value}
        type="text"
        maxLength={30}
        placeholder="카드 별명을 입력해주세요(선택)"
        onChange={onChange}
      />
    </S.CardNameInputWrapper>
  );
}
