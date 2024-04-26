import Input from '../../common/Input';
import InputContainer from '../../common/InputContainer';
import { ErrorWrapper, ErrorText } from '../../../styles/common';
import useExpiryDate from '../../../hooks/useExpiryDate';
import { IInputControl } from '../../../hooks/useInput';
import useFocusOnInitialRender from '../../../hooks/useFocusOnInitialRender';
import { useRef } from 'react';

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
  const initialFocusTargetRef = useFocusOnInitialRender<HTMLInputElement>();
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
          ref={initialFocusTargetRef}
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
      <ErrorWrapper>
        <ErrorText>{monthErrorMessage}</ErrorText>
        <ErrorText>{yearErrorMessage}</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CardExpiryDateInputContainer;
