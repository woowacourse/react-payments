import cn from 'classnames';
import styles from './Payments.module.css';

import { useState } from 'react';
import { CardPreview } from '../../features/cardPreview/CardPreview';

import type { ExpirationDate } from '@/entities/card/types';

import { CardNumberFormGroup } from '@/features/cardFormGroup/CardNumberFormGroup';
import { CvcFormGroup } from '@/features/cardFormGroup/CvcFormGroup';
import { ExpirationDateFormGroup } from '@/features/cardFormGroup/ExpirationDateFormGroup';
import { getBrand } from '@/entities/card/brand';

export const Payments = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const brand = getBrand(cardNumbers.join(''));

  const [expirationDate, setExpirationDate] = useState<ExpirationDate>({ month: '', year: '' });
  const [cvc, setCvc] = useState('');

  const handleChangeCardNumber = (cardNumber: string, index: number): void => {
    const next = [...cardNumbers];
    next[index] = cardNumber;
    setCardNumbers(next);
  };

  const handleChangeExpirationDate = (key: keyof ExpirationDate, value: string): void => {
    setExpirationDate((prev) => ({ ...prev, [key]: value }));
  };

  const handleChangeCvc = (cvc: string): void => {
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
          handleChangeCardNumber={handleChangeCardNumber}
        />
        <ExpirationDateFormGroup
          expirationDate={expirationDate}
          handleChangeExpirationDate={handleChangeExpirationDate}
        />
        <CvcFormGroup cvc={cvc} handleChangeCvc={handleChangeCvc} />
      </form>
    </div>
  );
};
