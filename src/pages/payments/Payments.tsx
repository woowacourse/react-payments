import styles from './Payments.module.css';

import { CardForm } from '@/features/registerCard/ui/cardForm/CardForm';

import { useState } from 'react';
import { useNumbers } from '@/features/registerCard/hooks/useNumbers';
import { useExpiryDate } from '@/features/registerCard/hooks/useExpiryDate';
// import type { CardInfo } from '@/features/cardPreview/CardPreview';

export type FocusElement = HTMLInputElement | HTMLSelectElement | null;

export const Payments = () => {
  const numbersField = useNumbers();
  const expiryField = useExpiryDate();
  const [cvc, setCvc] = useState('');
  const [password, setPassword] = useState('');
  const [bank, setBank] = useState('');

  const fields = {
    numbersField,
    expiryField,
    bankField: {
      value: bank,
      handleChange: (v: string) => setBank(v),
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

  //   const cardInfo:CardInfo={
  // cardNumbers: numbersField.values,
  // bank: numbersField.,
  // brand: numbersField.brand,
  //   expiryDate: expiry,
  //   }

  return (
    <div className={styles.payments}>
      {/* <CardPreview info={cardInfo} /> */}
      <CardForm {...fields} />
      {/* {isFormValid && <SubmitButton handleSubmit={handleSubmit} />} */}
    </div>
  );
};
