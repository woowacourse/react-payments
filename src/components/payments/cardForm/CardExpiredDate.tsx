import {
  PAYMENTS_INPUT_MESSAGE,
  PAYMENTS_MESSAGE,
} from '../../../constants/message';

import { BOUND } from '../../../constants/number';
import FormItem from '../../FormItem';
import SectionTitle from '../../SectionTitle';
import TextInput from '../../TextInput';
import TextInputContainer from '../../InputContainer';
import { UseCardExpiredDate } from '../../../hooks/payments/useCardExpiredDate';
import { useRef } from 'react';

interface props {
  useCardExpiredDate: UseCardExpiredDate;
}

export default function ExpiredDate({ useCardExpiredDate }: props) {
  const {
    isValid: isValidExpiredDate,
    isValidMonth,
    isValidYear,
    isFullFilled,
    isTouchedMonth,
    isTouchedYear,
  } = useCardExpiredDate;
  const yearRef = useRef<HTMLInputElement>(null);

  const monthElement = (
    <TextInput
      placeholder={PAYMENTS_INPUT_MESSAGE.expiredDateMonthPlaceHolder}
      onChange={useCardExpiredDate.monthOnChange}
      maxLength={BOUND.cardExpiredMonthStringUpper}
      borderColor={!isTouchedMonth || isValidMonth ? undefined : 'error'}
      aria-invalid={!((!isTouchedMonth || isValidMonth) && isValidExpiredDate)}
      autoFocus
      tabIndex={6}
    />
  );

  const yearElement = (
    <TextInput
      placeholder={PAYMENTS_INPUT_MESSAGE.expiredDateYearPlaceHolder}
      onChange={useCardExpiredDate.yearOnChange}
      maxLength={BOUND.cardExpiredYearStringUpper}
      borderColor={!isTouchedYear || isValidYear ? undefined : 'error'}
      aria-invalid={!((!isTouchedYear || isValidYear) && !isValidExpiredDate)}
      ref={yearRef}
      tabIndex={7}
    />
  );

  if (isValidMonth && !isValidYear) yearRef.current?.focus();
  return (
    <section>
      <SectionTitle
        title={PAYMENTS_MESSAGE.expiredDateTitle}
        description={PAYMENTS_MESSAGE.expiredDateDescription}
      />
      <FormItem
        labelText={PAYMENTS_INPUT_MESSAGE.expiredDateLabel}
        errorMessage={useCardExpiredDate.errorMessage}
      >
        <TextInputContainer
          childrenBorderColor={
            isFullFilled && !isValidExpiredDate && isValidMonth && isValidYear
              ? 'error'
              : undefined
          }
        >
          {monthElement}
          {yearElement}
        </TextInputContainer>
      </FormItem>
    </section>
  );
}
