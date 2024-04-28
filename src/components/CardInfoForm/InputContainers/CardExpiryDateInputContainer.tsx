import { useRef } from 'react';

import Input from '../../common/Input';
import InputContainer from '../../common/InputContainer';

import { IInputControl } from '../../../hooks/useInput';
import * as S from '../../../styles/common';
import makeUniqueString from '../../../utils/getUniqueId';

const MONTH_LENGTH = 2;

interface CardExpiryDateInputContainerProps {
  month: IInputControl;
  year: IInputControl;
}

const CardExpiryDateInputContainer = ({ month, year }: CardExpiryDateInputContainerProps) => {
  const yearInputRef = useRef<HTMLInputElement>(null);

  const focusYearInput = () => yearInputRef.current?.focus();

  const onMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    month.setValue(value);
    const isFilled = value.length === MONTH_LENGTH;
    if (isFilled) {
      focusYearInput();
    }
  };

  const monthInputId = makeUniqueString('card-expiry-month-input');
  const yearInputId = makeUniqueString('card-expiry-year-input');

  return (
    <div>
      <InputContainer
        title="카드 유효기간을 입력해 주세요"
        subtitle="월/년도(MMYY)를 순서대로 입력해 주세요."
        labelText="유효기간"
        labelFor={monthInputId}
      >
        <Input
          id={monthInputId}
          isError={month.errorStatus.isError}
          value={month.value}
          onChange={onMonthChange}
          onBlur={month.onBlur}
          placeholder="01"
          maxLength={2}
          width="48%"
          autoFocus={true}
        />
        <Input
          id={yearInputId}
          isError={year.errorStatus.isError}
          value={year.value}
          onChange={year.onChange}
          onBlur={year.onBlur}
          placeholder="24"
          maxLength={2}
          width="48%"
          ref={yearInputRef}
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
