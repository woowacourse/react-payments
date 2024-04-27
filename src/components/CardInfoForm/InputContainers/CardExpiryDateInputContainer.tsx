import { useRef } from 'react';

import Input from '../../common/Input';
import InputContainer from '../../common/InputContainer';

import useExpiryDate from '../../../hooks/useExpiryDate';
import { IInputControl } from '../../../hooks/useInput';
import * as S from '../../../styles/common';

const MONTH_LENGTH = 2;

interface CardExpiryDateInputContainerProps {
  month: IInputControl;
  year: IInputControl;
}

const CardExpiryDateInputContainer = ({ month, year }: CardExpiryDateInputContainerProps) => {
  const {
    onMonthChange,
    onYearChange,
    onMonthBlur,
    onYearBlur,
    monthErrorMessage,
    yearErrorMessage,
    isMonthError,
    isYearError,
  } = useExpiryDate({ month, year });
  const secondInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <InputContainer
        title="카드 유효기간을 입력해 주세요"
        subtitle="월/년도(MMYY)를 순서대로 입력해 주세요."
        labelText="유효기간"
        labelFor="card-expiry-month-input"
      >
        <Input
          id="card-expiry-month-input"
          isError={isMonthError}
          value={month.value}
          onChange={e => {
            onMonthChange(e);
            const isFilled = e.target.value.length === MONTH_LENGTH;
            if (isFilled) {
              secondInputRef.current?.focus();
            }
          }}
          onBlur={onMonthBlur}
          placeholder="01"
          maxLength={2}
          width="48%"
          autoFocus={true}
        />
        <Input
          ref={secondInputRef}
          id="card-expiry-year-input"
          isError={isYearError}
          value={year.value}
          onChange={onYearChange}
          onBlur={onYearBlur}
          placeholder="24"
          maxLength={2}
          width="48%"
        />
      </InputContainer>
      <S.ErrorWrapper>
        <S.ErrorText>{monthErrorMessage}</S.ErrorText>
        <S.ErrorText>{yearErrorMessage}</S.ErrorText>
      </S.ErrorWrapper>
    </div>
  );
};

export default CardExpiryDateInputContainer;
