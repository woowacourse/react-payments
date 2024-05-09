import { useEffect } from 'react';
import { FieldContainer } from '../../style/container.style';
import { useCVC } from 'use-card-input-hook';
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

export default function CVCField({ handleInput, handleComplete }: Props) {
  const { value, onChange, onBlur, errorMessage } = useCVC('');
  const inputType = INPUT_TYPE_CATEGORIES.CVC;

  useEffect(() => {
    handleInput({
      cvc: value,
    });

    handleComplete(true);
  }, [value]);

  return (
    <FieldContainer>
      <FieldTitle title="CVC 번호를 입력해 주세요" />
      <Label>{inputType.inputLabel}</Label>
      <InputBox>
        <StyledInput
          value={value}
          $error={!!errorMessage}
          onChange={onChange}
          onBlur={onBlur}
          name="CVC"
          placeholder={inputType.inputInfo[0].placeHolder}
        />
      </InputBox>
      <ErrorBox>{errorMessage}</ErrorBox>
    </FieldContainer>
  );
}
