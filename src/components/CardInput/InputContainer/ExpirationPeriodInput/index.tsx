import { useEffect } from 'react';

import {
  CARD_EXPIRATION_PERIOD_FORM_MESSAGE,
  ERROR_MESSAGE,
  INPUT_LENGTH,
} from '../../../../constants';
import useAutoFocus from '../../../../hooks/useAutoFocus';
import Input from '../../../common/Input';
import InputErrorMessage from '../../InputErrorMessage';
import InputField from '../../InputField';
import InputWrap from '../../InputWrap';

import styles from './style.module.css';

type PeriodState = {
  month: string;
  year: string;
};

type PeriodErrorsState = {
  month: boolean;
  year: boolean;
  expired: boolean;
};

type CardExpirationPeriodInputProps = {
  period: PeriodState;
  periodErrors: PeriodErrorsState;
  onPeriodChange: (type: 'month' | 'year', value: string) => void;
};

function CardExpirationPeriodInput({
  period,
  periodErrors,
  onPeriodChange,
}: CardExpirationPeriodInputProps) {
  const { title, subTitle, label, yearPlaceholder, monthPlaceholder } =
    CARD_EXPIRATION_PERIOD_FORM_MESSAGE;
  const { setElementRef, focusElementAtIndex } = useAutoFocus(2);

  useEffect(() => {
    if (period.month.length === INPUT_LENGTH.cardExpiration) {
      focusElementAtIndex(1);
    }
  }, [period.month]);

  const getErrorMessage = () => {
    if (periodErrors.month) {
      return ERROR_MESSAGE.cardExpirationPeriod.month;
    }

    if (periodErrors.year) {
      return ERROR_MESSAGE.cardExpirationPeriod.year;
    }

    if (periodErrors.expired) {
      return ERROR_MESSAGE.cardExpirationPeriod.expired;
    }
  };

  return (
    <InputWrap title={title} subTitle={subTitle}>
      <InputField label={label}>
        <div>
          <div className={styles.inputWrap}>
            <Input
              ref={(element) => setElementRef(element, 0)}
              type="number"
              name="month"
              value={period.month}
              placeholder={monthPlaceholder}
              isError={periodErrors.month || periodErrors.expired}
              onChange={(event) => onPeriodChange('month', event.target.value)}
            />
            <Input
              ref={(element) => setElementRef(element, 1)}
              type="number"
              name="year"
              value={period.year}
              placeholder={yearPlaceholder}
              isError={periodErrors.year || periodErrors.expired}
              onChange={(event) => onPeriodChange('year', event.target.value)}
            />
          </div>
          <InputErrorMessage errorMessage={getErrorMessage()} />
        </div>
      </InputField>
    </InputWrap>
  );
}

export default CardExpirationPeriodInput;
