import styles from './CardForm.module.css';

import { CvcField } from '@/features/registerCard/ui/fields/CvcField';
import { NumberField } from '@/features/registerCard/ui/fields/NumberField';
import type { UseNumbersResults } from '../../hooks/useNumbers';
import type { FieldControl } from '../fields/types';
import { PasswordField } from '../fields/PasswordField';
import type { UseExpiryDateResult } from '../../hooks/useExpiryDate';
import { ExpiryDateField } from '../fields/ExpiryDateField';
import { BankSelectField } from '../fields/BankSelectField';
import { usePaymentStep } from '../../hooks/usePaymentsStep';
import { STEP } from '../../model/step';

export interface CardFormProps {
  numbersField: UseNumbersResults;
  expiryField: UseExpiryDateResult;
  bankField: FieldControl;
  cvcField: FieldControl;
  passwordField: FieldControl;
}

export const CardForm = ({
  numbersField,
  expiryField,
  bankField,
  cvcField,
  passwordField,
}: CardFormProps) => {
  const { step, toStep, setStepRef } = usePaymentStep();

  return (
    <form className={styles.form} id="payment-form">
      {step >= 4 && (
        <PasswordField
          passwordField={passwordField}
          setStepRef={(node) => setStepRef(node, STEP.PASSWORD)}
          onComplate={() => {}}
        />
      )}
      {step >= 3 && (
        <CvcField
          cvcField={cvcField}
          setStepRef={(node) => setStepRef(node, STEP.CVC)}
          onComplate={() => toStep(STEP.PASSWORD)}
        />
      )}
      {step >= 2 && (
        <ExpiryDateField
          expiryField={expiryField}
          setStepRef={(node) => setStepRef(node, STEP.EXPIRY)}
          onComplate={() => toStep(STEP.CVC)}
        />
      )}
      {step >= 1 && (
        <BankSelectField
          bankField={bankField}
          setStepRef={(node) => setStepRef(node, STEP.BANK)}
          onComplate={() => toStep(STEP.EXPIRY)}
        />
      )}
      <NumberField
        numbersField={numbersField}
        setStepRef={(node) => setStepRef(node, STEP.NUMBERS)}
        onComplate={() => toStep(STEP.BANK)}
      />
    </form>
  );
};
