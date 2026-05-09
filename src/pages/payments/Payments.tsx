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
import { useInputFocus } from '@/core/hooks/useInputFocus';

export const Payments = () => {
  const { setInputRef, focusNext } = useInputFocus();

  const cardNumbers = useCardNumbers({
    validateCardNumber,
    validateCardNumberFormat,
  });
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

  const nextStep = () => {
    focusNext(0);
  };

  return (
    <div className={styles.payments}>
      <CardPreview info={cardInfo} />
      <form>
        <CardNumberFormGroup results={cardNumbers} setStepRef={setInputRef} onComplete={nextStep} />
        <ExpirationDateFormGroup
          month={month}
          setStepRef={setInputRef}
          onComplete={nextStep}
          year={year}
        />
        <CvcFormGroup cvc={cvc} />
      </form>
    </div>
  );
};
