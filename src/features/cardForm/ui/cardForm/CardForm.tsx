import styles from './CardForm.module.css';

import { useNavigate } from 'react-router-dom';

import { CvcField } from '@/features/cardField/ui/fields/CvcField';
import { CardNumberField } from '@/features/cardField/ui/fields/CardNumberField';
import { useCardNumbers } from '@/features/cardField/hooks/useCardNumbers';
import { ExpiryDateField } from '@/features/cardField/ui/fields/ExpiryDateField';

import { useExpiryDate } from '@/features/cardField/hooks/useExpiryDate';
import { useCvc } from '@/features/cardField/hooks/useCvc';
import { usePassword } from '@/features/cardField/hooks/usePassword';
import { PasswordField } from '@/features/cardField/ui/fields/PasswordField';
import { BankSelectField } from '@/features/cardField/ui/fields/BankSelectField';
import { useBank } from '@/features/cardField/hooks/useBank';
import { usePaymentStep } from '@/pages/payments/usePaymentsStep';
import { useState } from 'react';


export const CardForm = ({cardNumbers,expiryDate}) => {
  const [cvc, setCvc] = useState();

  return (
    <form className={styles.form} id="payment-form" onSubmit={handleSubmit}>
      {/* {step >= 4 && <PasswordField password={password} setStepRef={SET_REFS.PASSWORD} />}
      {step >= 3 && <CvcField cvc={cvc} setStepRef={SET_REFS.CVC} />}
      {step >= 2 && <ExpiryDateField expiryDate={expiryDate} setStepRef={SET_REFS.EXPIRY} />}
      {step >= 1 && <BankSelectField bank={bank} setStepRef={SET_REFS.BANK} />}
          {step >= 4 && <PasswordField password={password} setStepRef={SET_REFS.PASSWORD} />} */}
 <PasswordField password={password} setStepRef={SET_REFS.PASSWORD} />} 
      <CvcField cvc={cvc} setStepRef={SET_REFS.CVC} />
      <ExpiryDateField expiryDate={expiryDate} setStepRef={SET_REFS.EXPIRY} />
      <BankSelectField bank={bank} setStepRef={SET_REFS.BANK} />
      <CardNumberField cardNumbers={cardNumbers} setStepRef={SET_REFS.CARD_NUMBERS} />
    </form>
  );
};
