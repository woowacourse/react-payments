import { useEffect } from 'react';
import { FieldContainer } from '../../style/container.style';
import { usePassword } from 'use-card-input-hook';
import FieldTitle from '../FieldTitle';
import INPUT_TYPE_CATEGORIES from '../../constants/inputType';
import {
  ErrorBox,
  InputBox,
  Label,
  StyledInput,
} from '../../style/FieldStyled.style';

interface Props {
  handleInput: (value: Record<string, string>) => void;
  handleComplete: (isComplete: boolean) => void;
}

export default function PasswordField({ handleInput, handleComplete }: Props) {
  const { value, onChange, onBlur, errorMessage } = usePassword('');
  const inputType = INPUT_TYPE_CATEGORIES.PASSWORD;

  useEffect(() => {
    handleInput({
      password: value,
    });

    handleComplete(true);
  }, [value]);

  return (
    <FieldContainer>
      <FieldTitle title="비밀번호를 입력해 주세요" />
      <Label>{inputType.inputLabel}</Label>
      <InputBox>
        <StyledInput
          value={value}
          $error={!!errorMessage}
          onChange={onChange}
          onBlur={onBlur}
          name="password"
        />
      </InputBox>
      <ErrorBox>{errorMessage}</ErrorBox>
    </FieldContainer>
  );
}
