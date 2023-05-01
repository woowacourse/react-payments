import { Input } from 'components/common';
import React, { ChangeEventHandler } from 'react';
import { Styled as S } from './PasswordInput.styles';
import FormLabel from 'components/common/FormLabel/FormLabel';
import { usePasswordInput } from 'hooks/usePasswordInput';

export interface PasswordInputProps {
  onChangeFirst: ChangeEventHandler<HTMLInputElement>;
  onChangeSecond: ChangeEventHandler<HTMLInputElement>;
}

export function PasswordInput({ onChangeFirst, onChangeSecond }: PasswordInputProps) {
  const inputRefs = [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()];
  const { first, second } = usePasswordInput(inputRefs, onChangeFirst, onChangeSecond);

  return (
    <>
      <FormLabel>카드 비밀번호</FormLabel>
      <S.PasswordInputContainer>
        <Input
          ref={inputRefs[0]}
          inputMode="numeric"
          value={first.value}
          type="password"
          maxLength={1}
          onChange={first.onChange}
          required
        />
        <Input
          ref={inputRefs[1]}
          inputMode="numeric"
          value={second.value}
          type="password"
          maxLength={1}
          onChange={second.onChange}
          required
        />
        <S.DotContainer>•</S.DotContainer>
        <S.DotContainer>•</S.DotContainer>
      </S.PasswordInputContainer>
    </>
  );
}
