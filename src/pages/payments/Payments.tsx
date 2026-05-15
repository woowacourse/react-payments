import styles from './Payments.module.css';

import { CardForm } from '@/features/registerCard/ui/cardForm/CardForm';

import { useState } from 'react';
import { useNumbers } from '@/features/registerCard/hooks/useNumbers';
import { useExpiryDate } from '@/features/registerCard/hooks/useExpiryDate';
import { CardPreview } from '@/features/cardPreview/CardPreview';
import type { CardInfo } from '@/features/cardPreview/CardPreview';
import type { Bank } from '@/entities/card/model/bank';

export type FocusElement = HTMLInputElement | HTMLSelectElement | null;

export const Payments = () => {
  const numbersField = useNumbers();
  const expiryField = useExpiryDate();
  const [cvc, setCvc] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [bank, setBank] = useState<Bank>();

  const fields = {
    numbersField,
    expiryField,
    bankField: {
      value: bank,
      handleChange: (v: Bank | undefined) => setBank(v),
    },
    cvcField: {
      value: cvc,
      handleChange: (v: string) => setCvc(v),
    },
    passwordField: {
      value: password,
      handleChange: (v: string) => setPassword(v),
    },
  };

  const cardInfo: CardInfo = {
    cardNumbers: numbersField.values,
    bank: bank,
    brand: numbersField.brand,
    expiryDate: {
      month: expiryField.month.value,
      year: expiryField.year.value,
    },
  };

  return (
    <div className={styles.payments}>
      <CardPreview info={cardInfo} />
      <CardForm {...fields} />
      {/* {isFormValid && <SubmitButton handleSubmit={handleSubmit} />} */}
    </div>
  );
};
