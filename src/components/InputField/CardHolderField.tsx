import { useEffect } from 'react';
import { FieldContainer } from '../../style/container.style';
import { useCardHolder } from 'use-card-input-hook';
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

export default function CardHolderField({
  handleInput,
  handleComplete,
}: Props) {
  const { value, onChange, onBlur, errorMessage } = useCardHolder('');
  const inputType = INPUT_TYPE_CATEGORIES.USER_NAME;

  useEffect(() => {
    handleInput({
      userName: value,
    });

    handleComplete(true);
  }, [value]);

  return (
    <FieldContainer>
      <FieldTitle title="카드 소유자 이름을 입력해 주세요" />
      <Label>{inputType.inputLabel}</Label>
      <InputBox>
        <StyledInput
          value={value}
          $error={!!errorMessage}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={inputType.inputInfo[0].placeHolder}
          maxLength={20}
          minLength={1}
        />
      </InputBox>
      <ErrorBox>{errorMessage}</ErrorBox>
    </FieldContainer>
  );
}
