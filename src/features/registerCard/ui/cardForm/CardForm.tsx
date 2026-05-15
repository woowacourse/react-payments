import styles from './CardForm.module.css';

import { CvcField } from '@/features/registerCard/ui/fields/CvcField';
import { NumberField } from '@/features/registerCard/ui/fields/NumberField';
import type { UseNumbersResults } from '../../hooks/useNumbers';
import type { FieldControl } from '../fields/types';

export interface CardFormProps {
  numbersField: UseNumbersResults;
  cvcField: FieldControl;
}

export const CardForm = ({ numbersField, cvcField }: CardFormProps) => {
  return (
    <form className={styles.form} id="payment-form">
      {/* {step >= 4 && <PasswordField password={password} setStepRef={SET_REFS.PASSWORD} />}
      {step >= 3 && <CvcField cvc={cvc} setStepRef={SET_REFS.CVC} />}
      {step >= 2 && <ExpiryDateField expiryDate={expiryDate} setStepRef={SET_REFS.EXPIRY} />}
      {step >= 1 && <BankSelectField bank={bank} setStepRef={SET_REFS.BANK} />}
          {step >= 4 && <PasswordField password={password} setStepRef={SET_REFS.PASSWORD} />} */}
      {/* <PasswordField password={password} setStepRef={SET_REFS.PASSWORD} />}  */}
      <NumberField {...numbersField} />
      <CvcField {...cvcField} />
      {/* <ExpiryDateField expiryDate={expiryDate} setStepRef={SET_REFS.EXPIRY} /> */}
      {/* <BankSelectField bank={bank} setStepRef={SET_REFS.BANK} /> */}
    </form>
  );
};
