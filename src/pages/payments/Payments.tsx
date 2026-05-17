import styles from './Payments.module.css';

import { CardForm } from '@/features/registerCard/ui/cardForm/CardForm';
import { useState } from 'react';
import { CardPreview } from '@/features/cardPreview/CardPreview';
import type { CardInfo } from '@/features/cardPreview/CardPreview';
import type { Bank } from '@/entities/card/model/bank';
import { SubmitButton } from '@/features/submitButton/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { validateFieldData } from '@/features/registerCard/lib/validateFieldData';
import { FORM_ID, type FieldData } from '@/features/registerCard/model/payments';
import type { ExpiryDate } from '@/entities/card/model/expiryDate';

export const Payments = () => {
  const [numbers, setNumbers] = useState(['', '', '', '']);
  const [expiryDate, setExpiryDate] = useState<ExpiryDate>({
    month: '',
    year: '',
  });
  const [cvc, setCvc] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [bank, setBank] = useState<Bank>();

  const fields = {
    numbersField: {
      numbers,
      onChange: (v: string[]) => setNumbers(v),
    },
    expiryField: {
      expiryDate,
      onChange: (v: ExpiryDate) => setExpiryDate(v),
    },
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
    expiryDate: expiryDate,
  };

  const fieldData: FieldData = {
    numbers: numbers.join(''),
    expiryDate,
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
