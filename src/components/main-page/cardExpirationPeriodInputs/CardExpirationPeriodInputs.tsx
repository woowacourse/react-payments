import Input from '../../common/input/Input';
import { ExpirationPeriodProps } from '../../../types/index.types';
import { NO_ERROR, EXPIRATION_PERIOD } from '../../../constants/constant';
import { StyledContainer, StyledInputWrap, StyledErrorMessage } from '../../../styled-component/inputs';
import autoFocusToNext from '../../../util/autoFocus';
import { ValidationProps } from '../../../hooks/useValidation';

const EXPIRATION_PERIOD_LENGTH = 2;

function CardExpirationPeriodInputs({
  expirationPeriod,
  changeExpirationPeriod,
  viewNextInput,
  getErrorMessage,
  isInvalid,
}: ExpirationPeriodProps & ValidationProps) {
  const inputKeys: (keyof typeof expirationPeriod)[] = ['month', 'year'];

  return (
    <StyledContainer>
      <label>유효 기간</label>
      <form>
        <StyledInputWrap>
          {inputKeys.map((key) => (
            <Input
              key={key}
              value={expirationPeriod[key]}
              onChange={(e) => {
                changeExpirationPeriod(EXPIRATION_PERIOD[key.toUpperCase() as 'MONTH' | 'YEAR'], e.target.value);
                autoFocusToNext(e, EXPIRATION_PERIOD_LENGTH);

                if (key === 'year') {
                  const isMonthValid = !isInvalid('expirationMonth', expirationPeriod.month);
                  const isYearValid = !isInvalid('expirationYear', e.target.value);

                  const isComplete = isMonthValid && isYearValid;

                  if (isComplete) {
                    viewNextInput();
                  }
                }
              }}
              width="50%"
              maxLength={EXPIRATION_PERIOD_LENGTH}
              placeholder={key === 'month' ? 'MM' : 'YY'}
              isError={
                key === 'month'
                  ? isInvalid('expirationMonth', expirationPeriod.month)
                  : isInvalid('expirationYear', expirationPeriod.year)
              }
              isPassword={false}
            />
          ))}
        </StyledInputWrap>
      </form>
      <StyledErrorMessage>
        {getErrorMessage('expirationMonth', expirationPeriod.month) !== NO_ERROR
          ? getErrorMessage('expirationMonth', expirationPeriod.month)
          : getErrorMessage('expirationYear', expirationPeriod.year)}
      </StyledErrorMessage>
    </StyledContainer>
  );
}

export default CardExpirationPeriodInputs;
