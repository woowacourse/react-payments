import styles from './RegisterCardPage.module.css';

import { CardForm } from '@/features/registerCard/ui/cardForm/CardForm';
import { useState } from 'react';
import { CardPreview } from '@/entities/card/ui/CardPreview';
import { SubmitButton } from './submitButton/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { isRegisterCardErrorResponse, registerCard } from '@/entities/card/api/cards';
import { usePaymentsForm } from '@/features/registerCard/hooks/usePaymentsForm';
import {
  FORM_ID,
  SERVER_ERROR_FIELD_MAP,
  toRequestData,
  type CardInfo,
  type ServerErrorField,
} from '@/features/registerCard/model/registerCardForm';

type ServerError = {
  field: ServerErrorField;
  message: string;
} | null;

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
  const [serverError, setServerError] = useState<ServerError>(null);

  const onRegister = async () => {
    setServerError(null);

    try {
      const { cardInfo } = paymentsForm;
      await registerCard(toRequestData(cardInfo));
      navigate('/cards');
    } catch (error) {
      if (isRegisterCardErrorResponse(error)) {
        setServerError({
          field: SERVER_ERROR_FIELD_MAP[error.code],
          message: error.message,
        });
      }
    }
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
        serverError={serverError}
        onRegister={onRegister}
        formId={FORM_ID}
      />

      {paymentsForm.isFormValid && <SubmitButton formId={FORM_ID} />}
    </div>
  );
};
