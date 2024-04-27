import { useRef } from 'react';

import Input from '../../common/Input';
import InputContainer from '../../common/InputContainer';

import { IInputControl } from '../../../hooks/useInput';
import * as S from '../../../styles/common';

const MONTH_LENGTH = 2;

interface CardExpiryDateInputContainerProps {
  month: IInputControl;
  year: IInputControl;
}

const CardExpiryDateInputContainer = ({ month, year }: CardExpiryDateInputContainerProps) => {
  const secondInputRef = useRef<HTMLInputElement>(null);

  const focusSecondInput = () => secondInputRef.current?.focus();

  const onFirstInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    month.setValue(value);
    const isFilled = value.length === MONTH_LENGTH;
    if (isFilled) {
      focusSecondInput();
    }
  };

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
          isError={month.errorStatus.isError}
          value={month.value}
          onChange={onFirstInputChange}
          onBlur={month.onBlur}
          placeholder="01"
          maxLength={2}
          width="48%"
          autoFocus={true}
        />
        <Input
          ref={secondInputRef}
          id="card-expiry-year-input"
          isError={year.errorStatus.isError}
          value={year.value}
          onChange={year.onChange}
          onBlur={year.onBlur}
          placeholder="24"
          maxLength={2}
          width="48%"
        />
      </InputContainer>
      <S.ErrorWrapper>
        <S.ErrorText>{month.errorStatus.errorMessage}</S.ErrorText>
        <S.ErrorText>{year.errorStatus.errorMessage}</S.ErrorText>
      </S.ErrorWrapper>
    </div>
  );
};

export default CardExpiryDateInputContainer;
