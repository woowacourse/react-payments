import { MAX_LENGTH } from '../../App';
import * as S from '../../app.style';
import { EXPIRATION_PERIOD } from '../../constants/cardSection';
import { Input } from '../composables/input.style';
import Label from '../composables/Label';
import InputSection from './InputSection';
import { forwardRef, RefObject } from 'react';

type RegisterExpirationDateProps = {
  month: string;
  monthChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  monthError: boolean;
  monthRef: RefObject<HTMLInputElement>;
  handleMonthKeyDown: (e: React.KeyboardEvent) => void;
  handleMonthBlur: React.FocusEventHandler<HTMLInputElement>;
  year: string;
  yearChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  yearError: boolean;
  yearRef: RefObject<HTMLInputElement>;
  handleYearKeyDown: (e: React.KeyboardEvent) => void;
  handleYearBlur: React.FocusEventHandler<HTMLInputElement>;
};

const RegisterExpirationDate = forwardRef<HTMLInputElement, RegisterExpirationDateProps>(
  (props, ref) => {
    const {
      month,
      monthError,
      monthChangeHandler,
      handleMonthKeyDown,
      monthRef,
      handleMonthBlur,
      year,
      yearChangeHandler,
      yearError,
      yearRef,
      handleYearKeyDown,
      handleYearBlur,
    } = props;

    return (
      <S.Wrapper>
        <InputSection
          title={EXPIRATION_PERIOD.title}
          description={EXPIRATION_PERIOD.description}
          inputTitle={EXPIRATION_PERIOD.inputTitle}
        >
          <Label htmlFor={'month'} />
          <Input
            id={'month'}
            placeholder={'MM'}
            type="text"
            value={month}
            maxLength={MAX_LENGTH.MONTH}
            onChange={monthChangeHandler}
            isError={monthError}
            ref={monthRef}
            onKeyDown={handleMonthKeyDown}
            onBlur={handleMonthBlur}
          />
          <Label htmlFor={'year'} />
          <Input
            id={'year'}
            placeholder={'YY'}
            type="text"
            maxLength={MAX_LENGTH.YEAR}
            value={year}
            onChange={yearChangeHandler}
            isError={yearError}
            ref={yearRef}
            onKeyDown={handleYearKeyDown}
            onBlur={handleYearBlur}
          />
        </InputSection>
        <S.ErrorContainer>
          <S.ErrorMessageSpan>
            {monthError && yearError ? EXPIRATION_PERIOD.monthErrorMessage : ''}
            {!monthError && yearError ? EXPIRATION_PERIOD.yearErrorMessage : ''}
            {monthError && !yearError ? EXPIRATION_PERIOD.monthErrorMessage : ''}
          </S.ErrorMessageSpan>
        </S.ErrorContainer>
      </S.Wrapper>
    );
  },
);

export default RegisterExpirationDate;
