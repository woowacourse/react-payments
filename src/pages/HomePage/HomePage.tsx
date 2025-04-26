// pages/HomePage.tsx
import { FormEvent } from 'react';
import { useNavigate } from 'react-router';
import styles from './HomePage.module.css';
import CardPreview from '../../components/CardPreview/CardPreview';
import Spacing from '../../components/Spacing/Spacing';
import { useStack } from '../../hooks/useStack';
import { isFormValid } from '../../validation/isFormValid';
import { useStepFlow } from '../../hooks/useStepFlow';
import { useFormState } from '../../hooks/useFormState';
import { CardForm } from '../../components/CardForm/CardForm';

export default function HomePage() {
  const formState = useFormState();
  const steps = ['카드번호', '유효기간', '카드사', 'CVC', '비밀번호'] as const;
  const { Stack, setStep } = useStack<(typeof steps)[number]>('카드번호');

  useStepFlow({ formState, setStep });

  const navigate = useNavigate();

  const handleGoCompletePage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/complete', {
      state: {
        firstCardNumber: formState.cardNumbers.first.value,
        company: formState.company
      }
    });
  };

  const buttonVisible = isFormValid({
    cardNumbers: formState.cardNumbers,
    expiration: formState.expiration,
    cvc: formState.cvc,
    password: formState.password,
    company: formState.company
  });

  return (
    <div className={styles.wrapper}>
      <CardPreview cardNumbers={formState.cardNumbers} company={formState.company} expiration={formState.expiration} />
      <Spacing size={45} />
      <CardForm formState={formState} Stack={Stack} handleSubmit={handleGoCompletePage} buttonVisible={buttonVisible} />
    </div>
  );
}
