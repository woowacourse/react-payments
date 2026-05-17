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
  const navigate = useNavigate();

  const [numbers, setNumbers] = useState(['', '', '', '']);
  const [expiryDate, setExpiryDate] = useState<ExpiryDate>({
    month: '',
    year: '',
  });
  const [cvc, setCvc] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [bank, setBank] = useState<Bank>();

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

  const onRegister = (fieldData: FieldData) => {
    navigate('/result', {
      state: fieldData,
    });
  };

  const isFormValid = validateFieldData(fieldData);

  return (
    <div className={styles.payments}>
      <CardPreview info={cardInfo} />
      <CardForm
        numbersField={{ numbers, onChange: (v) => setNumbers(v) }}
        expiryField={{ expiryDate, onChange: (v) => setExpiryDate(v) }}
        bankField={{ value: bank, handleChange: (v) => setBank(v) }}
        cvcField={{ value: cvc, handleChange: (v) => setCvc(v) }}
        passwordField={{ value: password, handleChange: (v) => setPassword(v) }}
        onRegister={() => onRegister(fieldData)}
        formId={FORM_ID}
      />
      {isFormValid && <SubmitButton formId={FORM_ID} />}
    </div>
  );
};
