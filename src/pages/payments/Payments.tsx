import styles from './Payments.module.css';

import { CvcFormGroup } from '@/features/cardFormGroup/CvcFormGroup';
import { CardNumberFormGroup } from '@/features/cardFormGroup/CardNumberFormGroup';
import { ExpirationDateFormGroup } from '@/features/cardFormGroup/ExpirationDateFormGroup';
import { useField } from '@/core/hooks/useField';
import { validateCvc, validateCvcFormat } from '@/entities/card/cvc';
import {
  validateExpirationMonth,
  validateExpirationMonthFormat,
  validateExpirationYear,
  validateExpirationYearFormat,
} from '@/entities/card/expiration';
import { useCardNumbers } from '@/entities/card/useCardNumbers';
import { validateCardNumber, validateCardNumberFormat } from '@/entities/card/cardNumbers';
import { CardPreview, type CardInfo } from '@/features/cardPreview/CardPreview';

export const Payments = () => {
  const cardNumbers = useCardNumbers({
    validateCardNumber,
    validateCardNumberFormat,
  });

  // useField 한곳
  const month = useField({
    validateFormat: validateExpirationMonthFormat,
    validateComplete: validateExpirationMonth,
  });

  const year = useField({
    validateFormat: validateExpirationYearFormat,
    validateComplete: validateExpirationYear,
  });

  const cvc = useField({ validateFormat: validateCvcFormat, validateComplete: validateCvc });

  const cardInfo: CardInfo = {
    cardNumbers: cardNumbers.values,
    expirationDate: {
      month: month.value,
      year: year.value,
    },
  };

  return (
    <div className={styles.payments}>
      <CardPreview info={cardInfo} />
      <form>
        <CardNumberFormGroup results={cardNumbers} />
        <ExpirationDateFormGroup month={month} year={year} />
        <CvcFormGroup cvc={cvc} />
      </form>
    </div>
  );
};
