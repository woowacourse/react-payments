import { Input } from 'components/common';
import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { ValueAndOnChange } from '../types';
import { validateInput } from 'util/Validation';
import { Styled as S } from './PasswordInput.styles';
import FormLabel from 'components/common/FormLabel/FormLabel';

export interface PasswordInputProps {
  first: ValueAndOnChange;
  second: ValueAndOnChange;
}

export function PasswordInput(props: PasswordInputProps) {
  const { first, second } = props;
  const inputRefs = Object.keys(props).map(() => React.createRef<HTMLInputElement>());

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    onChange?: ChangeEventHandler<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    if (validateInput(value)) return;

    if (index < Object.keys(props).length - 1 && value.trim().length === e.target.maxLength) {
      inputRefs[index + 1].current?.focus();
    }
    onChange && onChange(e);
  };

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
          onChange={(e) => handleChange(e, 0, first.onChange)}
          required
        />
        <Input
          ref={inputRefs[1]}
          inputMode="numeric"
          value={second.value}
          type="password"
          maxLength={1}
          onChange={(e) => handleChange(e, 1, second.onChange)}
          required
        />
        <S.DotContainer>•</S.DotContainer>
        <S.DotContainer>•</S.DotContainer>
      </S.PasswordInputContainer>
    </>
  );
}
