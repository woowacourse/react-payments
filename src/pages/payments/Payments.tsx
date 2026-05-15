import styles from './Payments.module.css';

import { CardForm } from '@/features/registerCard/ui/cardForm/CardForm';

import { useState } from 'react';
import { useNumbers } from '@/features/registerCard/hooks/useNumbers';

export type FocusElement = HTMLInputElement | HTMLSelectElement | null;

export const Payments = () => {
  const numbers = useNumbers();
  const [cvc, setCvc] = useState('');

  const handleChangeCvc = (value: string) => {
    return setCvc(value);
  };
  const fields = {
    numbersField: numbers,
    cvcField: {
      value: cvc,
      handleChange: (v: string) => handleChangeCvc(v),
    },
  };

  return (
    <div className={styles.payments}>
      {/* <CardPreview info={cardInfo} /> */}
      <CardForm {...fields} />
      {/* {isFormValid && <SubmitButton handleSubmit={handleSubmit} />} */}
    </div>
  );
};
