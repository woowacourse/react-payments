import styles from './RegisterCardPage.module.css';

import { CardForm } from '@/features/registerCard/ui/cardForm/CardForm';
import { CardPreview } from '@/pages/registerCard/ui/cardPreview/CardPreview';
import { SubmitButton } from './submitButton/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { usePaymentsForm } from '@/features/registerCard/hooks/usePaymentsForm';
import { FORM_ID, type CardInfo } from '@/features/registerCard/model/registerCardForm';
import type { CardPreviewInfo } from '../model/cardPreview';

const initCardInfo: CardInfo = {
  numbers: ['', '', '', ''],
  expiryDate: {
    month: '',
    year: '',
  },
  cvc: '',
  password: '',
  bank: undefined,
};

export const RegisterCardPage = () => {
  const navigate = useNavigate();
  const paymentsForm = usePaymentsForm(initCardInfo);

  const cardPreviewInfo: CardPreviewInfo = {
    numbers: paymentsForm.cardInfo.numbers,
    expiryDate: paymentsForm.cardInfo.expiryDate,
    bank: paymentsForm.cardInfo.bank,
  };

  return (
    <div className={styles.payments}>
      <CardPreview info={cardPreviewInfo} />

      <CardForm
        paymentsForm={paymentsForm}
        onRegister={() => navigate('/cards')}
        formId={FORM_ID}
      />

      {paymentsForm.isFormValid && <SubmitButton formId={FORM_ID} />}
    </div>
  );
};
