import styles from './Payments.module.css';

import { CardForm } from '@/features/registerCard/ui/cardForm/CardForm';

import { useState } from 'react';
import { useExpiryDate } from '@/features/registerCard/hooks/useExpiryDate';
import { CardPreview } from '@/features/cardPreview/CardPreview';
import type { CardInfo } from '@/features/cardPreview/CardPreview';
import type { Bank } from '@/entities/card/model/bank';
import { SubmitButton } from '@/features/submitButton/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { validateFieldData } from '@/features/registerCard/lib/validateFieldData';
import { FORM_ID, type FieldData } from '@/features/registerCard/model/payments';

export const Payments = () => {
  const [numbers, setNumbers] = useState(['', '', '', '']);
  const expiryField = useExpiryDate();
  const [cvc, setCvc] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [bank, setBank] = useState<Bank>();

  const fields = {
    numbersField: {
      numbers,
      onChange: (v: string[]) => setNumbers(v),
    },
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
    numbers: numbers,
    bank: bank,
    expiryDate: {
      month: expiryField.month.value,
      year: expiryField.year.value,
    },
  };

  const fieldData: FieldData = {
    numbers: numbers.join(''),
    month: expiryField.month.value,
    year: expiryField.year.value,
    cvc,
    password,
    bank,
  };
  const isFormValid = validateFieldData(fieldData);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/result', {
      state: {
        cardNumbers: numbers.join(''),
        bank: bank,
      },
    });
  };

  return (
    <div className={styles.payments}>
      <CardPreview info={cardInfo} />
      <CardForm handleSubmit={handleSubmit} formId={FORM_ID} {...fields} />
      {isFormValid && <SubmitButton formId={FORM_ID} />}
    </div>
  );
};
