import styles from './CardForm.module.css';

import { CvcField } from '@/features/registerCard/ui/fields/CvcField';
import { NumberField } from '@/features/registerCard/ui/fields/CardNumberField';
import { PasswordField } from '../fields/PasswordField';
import { ExpiryDateField } from '../fields/ExpiryDateField';
import { BankSelectField } from '../fields/BankSelectField';
import { usePaymentStep } from '../../hooks/usePaymentsStep';
import {
  toRequestData,
  toServerError,
  type ServerError,
  type ServerErrorField,
} from '../../model/registerCardForm';
import { useEffect, useState, type FormEvent } from 'react';
import { registerCard } from '@/entities/card/api/cards';
import type { UsePaymentsFormResult } from '../../hooks/usePaymentsForm';

const STEP = {
  NUMBERS: 0,
  BANK: 1,
  EXPIRY: 2,
  CVC: 3,
  PASSWORD: 4,
  BUTTON: 5,
} as const;

const SERVER_ERROR_STEP: Record<ServerErrorField, number> = {
  numbers: STEP.NUMBERS,
  expiryDate: STEP.EXPIRY,
  cvc: STEP.CVC,
};

export interface CardFormProps {
  paymentsForm: UsePaymentsFormResult;
  formId: string;
  onRegister: () => void | Promise<void>;
}

export const CardForm = ({ paymentsForm, formId, onRegister }: CardFormProps) => {
  const { step, toStep, setStepRef } = usePaymentStep();
  const [serverError, setServerError] = useState<ServerError>(null);

  const { cardInfo, numbersField, expiryField, bankField, cvcField, passwordField } = paymentsForm;

  useEffect(() => {
    if (serverError === null) return;
    toStep(SERVER_ERROR_STEP[serverError.field]);
  }, [toStep, serverError]);

  const getServerError = (field: ServerErrorField) => {
    if (serverError?.field !== field) return undefined;

    return {
      message: serverError.message,
      onClear: () => setServerError(null),
    };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = await registerCard(toRequestData(cardInfo));

    if (!result.ok) {
      setServerError(toServerError(result.error));
      return;
    }

    onRegister();
  };

  return (
    <form className={styles.form} id={formId} onSubmit={handleSubmit}>
      {step >= STEP.PASSWORD && (
        <PasswordField {...passwordField} setStepRef={(node) => setStepRef(node, STEP.PASSWORD)} />
      )}

      {step >= STEP.CVC && (
        <CvcField
          {...cvcField}
          serverError={getServerError('cvc')}
          onComplete={() => toStep(STEP.PASSWORD)}
          setStepRef={(node) => setStepRef(node, STEP.CVC)}
        />
      )}

      {step >= STEP.EXPIRY && (
        <ExpiryDateField
          {...expiryField}
          onComplete={() => toStep(STEP.CVC)}
          setStepRef={(node) => setStepRef(node, STEP.EXPIRY)}
          serverError={getServerError('expiryDate')}
        />
      )}

      {step >= STEP.BANK && (
        <BankSelectField
          {...bankField}
          onComplete={() => toStep(STEP.EXPIRY)}
          setStepRef={(node) => setStepRef(node, STEP.BANK)}
        />
      )}

      <NumberField
        {...numbersField}
        onComplete={() => toStep(STEP.BANK)}
        setStepRef={(node) => setStepRef(node, STEP.NUMBERS)}
        serverError={getServerError('numbers')}
      />
    </form>
  );
};
