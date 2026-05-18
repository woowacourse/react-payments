import styles from './RegisterCardPage.module.css';

import { CardForm } from '@/features/registerCard/ui/cardForm/CardForm';
import { CardPreview } from '@/pages/registerCard/ui/cardPreview/CardPreview';
import { SubmitButton } from './submitButton/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { registerCard } from '@/entities/card/api/cards';
import { usePaymentsForm } from '@/features/registerCard/hooks/usePaymentsForm';
import {
  FORM_ID,
  toRequestData,
  type CardInfo,
} from '@/features/registerCard/model/registerCardForm';

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

  const onRegister = async () => {
    const { cardInfo } = paymentsForm;
    await registerCard(toRequestData(cardInfo));
    navigate('/cards');
  };

  return (
    <div className={styles.payments}>
      <CardPreview info={paymentsForm.cardPreviewInfo} />

      <CardForm
        numbersField={paymentsForm.numbersField}
        expiryField={paymentsForm.expiryField}
        bankField={paymentsForm.bankField}
        cvcField={paymentsForm.cvcField}
        passwordField={paymentsForm.passwordField}
        onRegister={onRegister}
        formId={FORM_ID}
      />

      {paymentsForm.isFormValid && <SubmitButton formId={FORM_ID} />}
    </div>
  );
};
