import styles from './Payments.module.css';

import { CvcField } from '@/features/cardForm/ui/fields/CvcField';
import { CardNumberField } from '@/features/cardForm/ui/fields/CardNumberField';
import { useCardNumbers } from '@/features/cardForm/hooks/useCardNumbers';
import { ExpiryDateField } from '@/features/cardForm/ui/fields/ExpiryDateField';
import { CardPreview, type CardInfo } from '@/features/cardPreview/CardPreview';

// import { useCardNumbers } from '@/features/cardForm/hooks/useCardNumbers';
import { useExpiryDate } from '@/features/cardForm/hooks/useExpiryDate';
import { useCvc } from '@/features/cardForm/hooks/useCvc';
import { usePassword } from '@/features/cardForm/hooks/usePassword';
import { PasswordField } from '@/features/cardForm/ui/fields/PasswordField';
import { BankSelectField } from '@/features/cardForm/ui/fields/BankSelectField';
import { usePaymentStep } from './usePaymentsStep';
import { SubmitButton } from '@/features/cardForm/ui/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { useBank } from '@/features/cardForm/hooks/useBank';

const STEP = {
  CARD: 0,
  BANK: 1,
  EXPIRY: 2,
  CVC: 3,
  PASSWORD: 4,
  BUTTON: 5,
};
export type FocusElement = HTMLInputElement | HTMLSelectElement | null;

export const Payments = () => {
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
  const bank = useBank({ onComplete: () => toStep(STEP.EXPIRY) });
  const expiryDate = useExpiryDate({ onComplete: () => toStep(STEP.CVC) });
  const cvc = useCvc({ onComplete: () => toStep(STEP.PASSWORD) });
  const password = usePassword({ onComplete: () => STEP.BUTTON });

  const cardInfo: CardInfo = {
    bank: bank.value,
    cardNumbers: cardNumbers.values,
    brand: cardNumbers.brand,
    expiryDate: {
      month: expiryDate.month.value,
      year: expiryDate.year.value,
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/result', {
      state: {
        cardNumbers: cardNumbers.values,
        bank: bank.value,
      },
    });
  };

  const isFormValid =
    cardNumbers.isValid &&
    bank !== undefined &&
    expiryDate.isValid &&
    cvc.isValid &&
    password.isValid;

  return (
    <div className={styles.payments}>
      <CardPreview info={cardInfo} />
      <form className={styles.form} id="payment-form" onSubmit={handleSubmit}>
        {step >= 4 && <PasswordField password={password} setStepRef={SET_REFS.PASSWORD} />}
        {step >= 3 && <CvcField cvc={cvc} setStepRef={SET_REFS.CVC} />}
        {step >= 2 && <ExpiryDateField expiryDate={expiryDate} setStepRef={SET_REFS.EXPIRY} />}
        {step >= 1 && <BankSelectField bank={bank} setStepRef={SET_REFS.BANK} />}
        <CardNumberField cardNumbers={cardNumbers} setStepRef={SET_REFS.CARD_NUMBERS} />
        {isFormValid && <SubmitButton form="payment-form" />}
      </form>
    </div>
  );
};
