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
import type { ServerErrorField } from '../../model/registerCardForm';
import { useEffect, type FormEvent } from 'react';

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
  serverError: { field: ServerErrorField; message: string } | null;
  onRegister: () => void | Promise<void>;
}

export const CardForm = ({
  numbersField,
  expiryField,
  bankField,
  cvcField,
  passwordField,
  formId,
  serverError,
  onRegister,
}: CardFormProps) => {
  const { step, toStep, setStepRef } = usePaymentStep();

  useEffect(() => {
    if (serverError === null) return;

    toStep(SERVER_ERROR_STEP[serverError.field]);
  }, [toStep, serverError]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
          serverErrorMessage={serverError?.field === 'cvc' ? serverError.message : undefined}
          onComplete={() => toStep(STEP.PASSWORD)}
          setStepRef={(node) => setStepRef(node, STEP.CVC)}
        />
      )}

      {step >= STEP.EXPIRY && (
        <ExpiryDateField
          {...expiryField}
          serverErrorMessage={serverError?.field === 'expiryDate' ? serverError.message : undefined}
          onComplete={() => toStep(STEP.CVC)}
          setStepRef={(node) => setStepRef(node, STEP.EXPIRY)}
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
        serverErrorMessage={serverError?.field === 'numbers' ? serverError.message : undefined}
        onComplete={() => toStep(STEP.BANK)}
        setStepRef={(node) => setStepRef(node, STEP.NUMBERS)}
      />
    </form>
  );
};
