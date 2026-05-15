import styles from './CardForm.module.css';

import { CvcField } from '@/features/registerCard/ui/fields/CvcField';
import { NumberField } from '@/features/registerCard/ui/fields/NumberField';
import type { UseNumbersResults } from '../../hooks/useNumbers';
import type { FieldControl } from '../fields/types';
import { PasswordField } from '../fields/PasswordField';
import type { UseExpiryDateResult } from '../../hooks/useExpiryDate';
import { ExpiryDateField } from '../fields/ExpiryDateField';
import { BankSelectField } from '../fields/BankSelectField';

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
  return (
    <form className={styles.form} id="payment-form">
      <PasswordField {...passwordField} />
      <CvcField {...cvcField} />
      <BankSelectField bank={bankField} />
      <ExpiryDateField {...expiryField} />
      <NumberField {...numbersField} />
    </form>
  );
};
