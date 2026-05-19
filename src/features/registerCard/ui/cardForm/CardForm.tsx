import styles from './CardForm.module.css';

import { CvcField, type CvcFieldControl } from '@/features/registerCard/ui/fields/CvcField';
import {
  NumberField,
  type CardNumberFieldControl,
} from '@/features/registerCard/ui/fields/CardNumberField';
import { PasswordField, type PasswordFieldControl } from '../fields/PasswordField';
import { ExpiryDateField, type ExpiryFieldControl } from '../fields/ExpiryDateField';
import { BankSelectField, type BankFieldControl } from '../fields/BankSelectField';
import { usePaymentStep } from '../../hooks/usePaymentsStep';
import {
  SERVER_ERROR_FIELD_MAP,
  type ServerError,
  type ServerErrorField,
} from '../../model/registerCardForm';
import { useEffect, useState, type FormEvent } from 'react';
import { isRegisterCardErrorResponse } from '@/entities/card/api/cards';

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
  numbersField: CardNumberFieldControl;
  expiryField: ExpiryFieldControl;
  bankField: BankFieldControl;
  cvcField: CvcFieldControl;
  passwordField: PasswordFieldControl;
  formId: string;
  onRegister: () => void | Promise<void>;
}

export const CardForm = ({
  numbersField,
  expiryField,
  bankField,
  cvcField,
  passwordField,
  formId,
  onRegister,
}: CardFormProps) => {
  const { step, toStep, setStepRef } = usePaymentStep();
  const [serverError, setServerError] = useState<ServerError>(null);

  useEffect(() => {
    if (serverError === null) return;
    toStep(SERVER_ERROR_STEP[serverError.field]);
  }, [toStep, serverError]);

  const getServerError = (field: ServerErrorField) =>
    serverError?.field === field
      ? { message: serverError.message, onClear: () => setServerError(null) }
      : undefined;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await onRegister();
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
