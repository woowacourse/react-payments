import { ChangeEvent } from 'react';
import { FieldContainer } from '../../style/container.style';
import FieldTitle from '../FieldTitle';
import { useExpiryDate } from 'use-card-input-hook';
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

export default function CardExpiryDateField({
  handleInput,
  handleComplete,
}: Props) {
  const {
    values: { month, year },
    onChange,
    onBlur,
    errorMessages,
  } = useExpiryDate({
    month: '',
    year: '',
  });
  const inputType = INPUT_TYPE_CATEGORIES.EXPIRY_DATE;

  const handleMonthInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    handleInput({
      month: e.target.value,
      year,
    });
    handleComplete(true);
  };

  const handleYearInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    handleInput({
      month,
      year: e.target.value,
    });
    handleComplete(true);
  };

  return (
    <FieldContainer>
      <FieldTitle
        title="카드 유효기간을 입력해 주세요"
        subtitle="월/년도(MMYY)를 순서대로 입력해 주세요."
      />
      <Label>{inputType.inputLabel}</Label>
      <InputBox>
        <StyledInput
          value={month}
          $error={!!errorMessages.month}
          onChange={handleMonthInput}
          onBlur={onBlur}
          placeholder={inputType.inputInfo[0].placeHolder}
          maxLength={2}
          name="month"
        />
        <StyledInput
          value={year}
          $error={!!errorMessages.year}
          onChange={handleYearInput}
          onBlur={onBlur}
          placeholder={inputType.inputInfo[1].placeHolder}
          maxLength={2}
          name="year"
        />
      </InputBox>
      <ErrorBox>{errorMessages.month || errorMessages.year}</ErrorBox>
    </FieldContainer>
  );
}
