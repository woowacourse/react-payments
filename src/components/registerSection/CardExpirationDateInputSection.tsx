import * as S from '../../app.style';
import { MAX_LENGTH, EXPIRATION_PERIOD } from '@/constants/cardSection';
import { Input } from '../composables/input.style';
import Label from '../composables/Label';
import InputSection from '../composables/InputSection';
import { forwardRef, RefObject, useCallback, useRef } from 'react';

type RegisterExpirationDateProps = {
  month: string;
  monthChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    nextRef: RefObject<HTMLInputElement>,
  ) => void;
  monthError: boolean;
  handleMonthBlur: React.FocusEventHandler<HTMLInputElement>;
  year: string;
  yearChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  yearError: boolean;
  handleYearKeyDown: (e: React.KeyboardEvent) => void;
  handleYearBlur: React.FocusEventHandler<HTMLInputElement>;
};

const CardExpirationDateInputSection = forwardRef<HTMLInputElement, RegisterExpirationDateProps>(
  (props) => {
    const {
      month,
      monthError,
      monthChangeHandler,
      handleMonthBlur,
      year,
      yearChangeHandler,
      yearError,
      handleYearKeyDown,
      handleYearBlur,
    } = props;

    const yearRef = useRef<HTMLInputElement>(null);

    const monthRef = useCallback((node: HTMLInputElement | null) => {
      node?.focus();
    }, []);

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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => monthChangeHandler(e, yearRef)}
            isError={monthError}
            ref={monthRef}
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

export default CardExpirationDateInputSection;
