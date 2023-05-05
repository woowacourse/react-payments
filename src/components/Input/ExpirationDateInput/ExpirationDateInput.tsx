import { Input } from 'components/common';
import { ChangeEventHandler } from 'react';
import { Styled as S } from './ExpirationDateInput.styles';
import FormLabel from 'components/common/FormLabel/FormLabel';
import { useExpirationDataInput } from 'hooks/useExpirationDateInput';
import { ErrorCaption } from 'components/Form/AddCardForm';

export interface ExpirationDateProps {
  onChangeMonth: ChangeEventHandler<HTMLInputElement>;
  onChangeYear: ChangeEventHandler<HTMLInputElement>;
}

export function ExpirationDateInput({ onChangeMonth, onChangeYear }: ExpirationDateProps) {
  const { isMonthError, isYearError, month, year } = useExpirationDataInput(
    onChangeMonth,
    onChangeYear,
  );

  return (
    <>
      <FormLabel>만료일</FormLabel>
      <S.ExpirationDateContainer>
        <S.ExpirationDateWrapper>
          <Input
            id="month"
            inputMode="numeric"
            value={month.value}
            type="text"
            maxLength={2}
            placeholder="MM"
            className={isMonthError ? 'error' : ''}
            onChange={month.onChange}
            required
          />
        </S.ExpirationDateWrapper>
        <S.SLASH />
        <S.ExpirationDateWrapper>
          <Input
            id="year"
            inputMode="numeric"
            value={year.value}
            type="text"
            maxLength={2}
            placeholder="YY"
            className={isYearError ? 'error' : ''}
            onChange={year.onChange}
            required
          />
        </S.ExpirationDateWrapper>
      </S.ExpirationDateContainer>
      {<ErrorCaption>{isMonthError && '유효한 월(01,02,...,12)을 입력해주세요.'}</ErrorCaption>}
      {
        <ErrorCaption>
          {isYearError &&
            `유효한 연도(현재 연도 포함 최대 5년)를 입력해주세요. (현재 ${new Date().getFullYear()}년)`}
        </ErrorCaption>
      }
    </>
  );
}
