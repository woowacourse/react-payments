import { Input } from 'components/common';
import { ChangeEventHandler } from 'react';
import { Styled as S } from './PasswordInput.styles';
import FormLabel from 'components/common/FormLabel/FormLabel';
import { usePasswordInput } from 'hooks/usePasswordInput';
import { ErrorCaption } from 'components/Form/AddCardForm';

export interface PasswordInputProps {
  onChangeFirst: ChangeEventHandler<HTMLInputElement>;
  onChangeSecond: ChangeEventHandler<HTMLInputElement>;
}

export function PasswordInput({ onChangeFirst, onChangeSecond }: PasswordInputProps) {
  const { isFirstError, isSecondError, first, second } = usePasswordInput(
    onChangeFirst,
    onChangeSecond,
  );

  return (
    <>
      <FormLabel>카드 비밀번호</FormLabel>
      <S.PasswordInputContainer>
        <Input
          id="first-password"
          inputMode="numeric"
          value={first.value}
          type="password"
          maxLength={1}
          className={isFirstError ? 'error' : ''}
          placeholder="•"
          required
          onChange={first.onChange}
        />
        <Input
          id="second-password"
          inputMode="numeric"
          value={second.value}
          type="password"
          maxLength={1}
          className={isSecondError ? 'error' : ''}
          placeholder="•"
          required
          onChange={second.onChange}
        />
        <S.DotContainer>•</S.DotContainer>
        <S.DotContainer>•</S.DotContainer>
      </S.PasswordInputContainer>
      {
        <ErrorCaption>
          {(isFirstError || isSecondError) && '카드 비밀번호 앞 두자리를 입력해주세요.'}
        </ErrorCaption>
      }
    </>
  );
}
