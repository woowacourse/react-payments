import styles from './Payments.module.css';

import { useState } from 'react';

import type { ExpirationDate } from '@/entities/card/types';
import { getBrand } from '@/entities/card/brand';

import type { CardInfo } from '@/features/cardPreview/CardPreview';
import { CardPreview } from '@/features/cardPreview/CardPreview';

import { CvcFormGroup } from '@/features/cardFormGroup/CvcFormGroup';
import { CardNumberFormGroup } from '@/features/cardFormGroup/CardNumberFormGroup';
import { ExpirationDateFormGroup } from '@/features/cardFormGroup/ExpirationDateFormGroup';

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

  const cardInfo: CardInfo = {
    cardNumbers,
    expirationDate,
  };

  return (
    <div className={styles.payments}>
      <CardPreview info={cardInfo} />
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
