import cn from 'classnames';
import styles from './Payments.module.css';

import { useState } from 'react';
import { CardPreview } from '../../features/cardPreview/CardPreview';

import type { ExpirationDate } from '@/entities/card/types';

import { CardNumberFormGroup } from '@/features/CardFormGroup/CardNumberFormGroup';
import { CvcFormGroup } from '@/features/CardFormGroup/CvcFormGroup';
import { ExpirationDateFormGroup } from '@/features/CardFormGroup/ExpirationDateFormGroup';
import { CARD_BRAND_FORMAT, getBrand } from '@/entities/card/brand';

import { isValidInputNumber } from '@/core/utils/validator';
import { validateExpirationDate, validateCvc } from '@/entities/card/validator';

export const Payments = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState<ExpirationDate>({ month: '', year: '' });
  const [cvc, setCvc] = useState('');

  const brand = getBrand(cardNumbers.join(''));

  const handleChangeCardNumber = (cardNumber: string, index: number): void => {
    if (!isValidInputNumber(cardNumber, CARD_BRAND_FORMAT[brand][index])) return;
    const next = [...cardNumbers];
    next[index] = cardNumber;
    setCardNumbers(next);
  };

  const handleChangeExpirationDate = (expirationDate: ExpirationDate): void => {
    if (expirationDate.month !== '' && !validateExpirationDate(expirationDate)) return;
    setExpirationDate(expirationDate);
  };

  const handleChangeCvc = (cvc: string): void => {
    if (cvc !== '' && !validateCvc(cvc)) return;
    setCvc(cvc);
  };

  return (
    <div className={cn(styles.payments)}>
      <CardPreview
        cardBrand={brand}
        cardNumbers={cardNumbers}
        expirationDate={{ month: expirationDate.month, year: expirationDate.year }}
      />
      <form>
        <CardNumberFormGroup
          brand={brand}
          cardNumbers={cardNumbers}
          onChangeCardNumber={handleChangeCardNumber}
        />
        {/* <CvcFormGroup cvc={cvc} onChangeCvc={handleChangeCvc} />
        <ExpirationDateFormGroup
          expirationDate={expirationDate}
          onChangeExpirationDate={handleChangeExpirationDate}
        /> */}
      </form>
    </div>
  );
};
