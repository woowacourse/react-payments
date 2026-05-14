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

const STEP = {
  CARD: 0,
  BANK: 1,
  EXPIRY: 2,
  CVC: 3,
  PASSWORD: 4,
  BUTTON: 5,
};
export type FocusElement = HTMLInputElement | HTMLSelectElement | null;

export const CardForm = () => {
  const navigate = useNavigate();
  const { step, toStep, setInputRef } = usePaymentStep();

  const SET_REFS = {
    CARD_NUMBERS: (node: FocusElement) => setInputRef(node, STEP.CARD),
    BANK: (node: FocusElement) => setInputRef(node, STEP.BANK),
    EXPIRY: (node: FocusElement) => setInputRef(node, STEP.EXPIRY),
    CVC: (node: FocusElement) => setInputRef(node, STEP.CVC),
    PASSWORD: (node: FocusElement) => setInputRef(node, STEP.PASSWORD),
  };

  const cardNumbers = useCardNumbers({ onComplete: () => toStep(STEP.BANK) });
  const bank = useBank({ onComplete: () => STEP.BANK });
  const expiryDate = useExpiryDate({ onComplete: () => toStep(STEP.CVC) });
  const cvc = useCvc({ onComplete: () => toStep(STEP.PASSWORD) });
  const password = usePassword({ onComplete: () => STEP.BUTTON });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/result', {
      state: {
        cardNumbers: cardNumbers.values,
        bank: bank,
      },
    });
  };

  return (
    <form className={styles.form} id="payment-form" onSubmit={handleSubmit}>
      {step >= 4 && <PasswordField password={password} setStepRef={SET_REFS.PASSWORD} />}
      {step >= 3 && <CvcField cvc={cvc} setStepRef={SET_REFS.CVC} />}
      {step >= 2 && <ExpiryDateField expiryDate={expiryDate} setStepRef={SET_REFS.EXPIRY} />}
      {step >= 1 && <BankSelectField bank={bank} setStepRef={SET_REFS.BANK} />}
      <CardNumberField cardNumbers={cardNumbers} setStepRef={SET_REFS.CARD_NUMBERS} />
    </form>
  );
};
