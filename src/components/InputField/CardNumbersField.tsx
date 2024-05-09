import { useEffect } from 'react';
import { FieldContainer } from '../../style/container.style';
import { useCardNumbers } from 'use-card-input-hook';
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

export default function CardNumbersField({
  handleInput,
  handleComplete,
}: Props) {
  const { value, cardBrand, onChange, onBlur, errorMessage } = useCardNumbers();
  const inputType = INPUT_TYPE_CATEGORIES.CARD_NUMBER;

  useEffect(() => {
    handleInput({
      cardBrand: cardBrand,
      cardNumbers: value,
    });

    handleComplete(true);
  }, [value]);

  return (
    <FieldContainer>
      <FieldTitle
        title="결제할 카드 번호를 입력해 주세요"
        subtitle="본인 명의의 카드만 결제 가능합니다."
      />
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
