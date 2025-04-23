import Input from '../input/Input';
import { ExpirationPeriod, ExpirationPeriodProps } from '../../types/index.types';
import { isValidLength, isValidMonthRange, isValidNumber, isValidYearRange } from '../../util/validation';
import { NO_ERROR, EXPIRATION_PERIOD } from '../../constants/constant';
import { StyledContainer, StyledInputWrap, StyledErrorMessage } from '../../styled-component/inputs';
import autoFocusToNext from '../../util/autoFocus';

const EXPIRATION_PERIOD_LENGTH = 2;

const errorMessages = {
  length: '2자리만 입력 가능합니다.',
  number: '숫자만 입력 가능합니다.',
  monthRange: '유효기간은 1~12월 사이여야 합니다.',
  yearRange: '유효기간은 25~99년 사이여야 합니다.',
};

const isCardExpirationPeriodMonthInvalid = (month: string): boolean => {
  if (month === '') return false;
  return !isValidLength(month, EXPIRATION_PERIOD_LENGTH) || !isValidNumber(month) || !isValidMonthRange(month);
};

const isCardExpirationPeriodYearInvalid = (year: string): boolean => {
  if (year === '') return false;
  return !isValidLength(year, EXPIRATION_PERIOD_LENGTH) || !isValidNumber(year) || !isValidYearRange(year);
};

const getErrorMessage = (expirationPeriods: ExpirationPeriod) => {
  const { month, year } = expirationPeriods;

  if (month !== '') {
    if (!isValidLength(month, EXPIRATION_PERIOD_LENGTH)) return errorMessages.length;
    if (!isValidNumber(month)) return errorMessages.number;
    if (!isValidMonthRange(month)) return errorMessages.monthRange;
  }

  if (year !== '') {
    if (!isValidLength(year, EXPIRATION_PERIOD_LENGTH)) return errorMessages.length;
    if (!isValidNumber(year)) return errorMessages.number;
    if (!isValidYearRange(year)) return errorMessages.yearRange;
  }

  return NO_ERROR;
};

function CardExpirationPeriodInputs({ expirationPeriod, changeExpirationPeriod }: ExpirationPeriodProps) {
  const errorMessage = getErrorMessage(expirationPeriod);

  return (
    <StyledContainer>
      <label htmlFor="">유효 기간</label>
      <form>
        <StyledInputWrap>
          <Input
            value={expirationPeriod['month']}
            onChange={(e) => {
              changeExpirationPeriod(EXPIRATION_PERIOD.MONTH, e.target.value);
              autoFocusToNext(e, EXPIRATION_PERIOD_LENGTH);
            }}
            width="50%"
            maxLength={EXPIRATION_PERIOD_LENGTH}
            placeholder="MM"
            isError={isCardExpirationPeriodMonthInvalid(expirationPeriod['month'])}
            isPassword={false}
          ></Input>
          <Input
            value={expirationPeriod['year']}
            onChange={(e) => {
              changeExpirationPeriod(EXPIRATION_PERIOD.YEAR, e.target.value);
              autoFocusToNext(e, EXPIRATION_PERIOD_LENGTH);
            }}
            width="50%"
            maxLength={EXPIRATION_PERIOD_LENGTH}
            placeholder="YY"
            isError={isCardExpirationPeriodYearInvalid(expirationPeriod['year'])}
            isPassword={false}
          />
        </StyledInputWrap>
      </form>
      <StyledErrorMessage>{errorMessage ?? ''}</StyledErrorMessage>
    </StyledContainer>
  );
}

export default CardExpirationPeriodInputs;
