import styles from './Payments.module.css';

import { CvcFormGroup } from '@/features/cardFormGroup/ui/CvcFormGroup';
import { CardNumberFormGroup } from '@/features/cardFormGroup/ui/CardNumberFormGroup';
import { useCardNumbers } from '@/features/cardFormGroup/hooks/useCardNumbers';
import { ExpiryDateFormGroup } from '@/features/cardFormGroup/ui/ExpiryDateFormGroup';
import { CardPreview, type CardInfo } from '@/features/cardPreview/CardPreview';

// import { useCardNumbers } from '@/features/cardFormGroup/hooks/useCardNumbers';
import { useExpiryDate } from '@/features/cardFormGroup/hooks/useExpiryDate';
import { useCvc } from '@/features/cardFormGroup/hooks/useCvc';
import { usePassword } from '@/features/cardFormGroup/hooks/usePassword';
import { PasswordFormGroup } from '@/features/cardFormGroup/ui/PasswordFormGroup';
import { useBank } from '@/features/cardFormGroup/hooks/useBank';
import { BankSelectFormGroup } from '@/features/cardFormGroup/ui/BankSelectFormGroup';
import { usePaymentStep } from './usePaymentsStep';
import { SubmitButton } from '@/features/cardFormGroup/ui/SubmitButton';
import { useNavigate } from 'react-router-dom';

const STEP = {
  CARD: 0,
  BANK: 1,
  EXPIRY: 2,
  CVC: 3,
  PASSWORD: 4,
  BUTTON: 5,
};

export const Payments = () => {
  const navigate = useNavigate();
  const { step, toStep, setInputRef } = usePaymentStep();

  const SET_REFS = {
    CARD_NUMBERS: (node: HTMLInputElement | null) => setInputRef(node, STEP.CARD),
    BANK: (node: HTMLSelectElement | null) => setInputRef(node, STEP.BANK),
    EXPIRY: (node: HTMLInputElement | null) => setInputRef(node, STEP.EXPIRY),
    CVC: (node: HTMLInputElement | null) => setInputRef(node, STEP.CVC),
    PASSWORD: (node: HTMLInputElement | null) => setInputRef(node, STEP.PASSWORD),
  };

  const cardNumbers = useCardNumbers({ onComplete: () => toStep(STEP.BANK) });
  const bank = useBank({ onComplete: () => toStep(STEP.EXPIRY) });
  const expiryDate = useExpiryDate({ onComplete: () => toStep(STEP.CVC) });
  const cvc = useCvc({ onComplete: () => toStep(STEP.PASSWORD) });
  const password = usePassword({ onComplete: () => STEP.BUTTON });

  const cardInfo: CardInfo = {
    bank: bank.value,
    cardNumbers: cardNumbers.values,
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
    bank.value !== 'unknown' &&
    expiryDate.isValid &&
    cvc.isValid &&
    password.isValid;

  return (
    <div className={styles.payments}>
      <CardPreview info={cardInfo} />
      <form className={styles.form} id="payment-form" onSubmit={handleSubmit}>
        {step >= 4 && <PasswordFormGroup password={password} setStepRef={SET_REFS.PASSWORD} />}
        {step >= 3 && <CvcFormGroup cvc={cvc} setStepRef={SET_REFS.CVC} />}
        {step >= 2 && <ExpiryDateFormGroup expiryDate={expiryDate} setStepRef={SET_REFS.EXPIRY} />}
        {step >= 1 && <BankSelectFormGroup bank={bank} setStepRef={SET_REFS.BANK} />}
        <CardNumberFormGroup cardNumbers={cardNumbers} setStepRef={SET_REFS.CARD_NUMBERS} />
        {isFormValid && <SubmitButton form="payment-form" />}
      </form>
    </div>
  );
};
