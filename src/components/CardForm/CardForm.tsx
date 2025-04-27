import { FormEvent } from 'react';
import CardNumberSection from '../../components/CardNumberSection/CardNumberSection';
import CardExpirationSection from '../../components/CardExpirationSection/CardExpirationSection';
import CardCompanySection from '../../components/CardCompanySection/CardCompanySection';
import CvcSection from '../../components/CvcSection/CvcSection';
import PasswordSection from '../../components/PasswordSection/PasswordSection';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router';
import { useStack } from '../../hooks/useStack';
import { useStepFlow } from '../../hooks/useStepFlow';
import { isFormValid } from '../../validation/isFormValid';
import { STEPS } from '../../constants';
import styles from '../../../src/pages/HomePage/HomePage.module.css';
import { useFormContext } from '../../contexts/useFormContext';

export function CardForm() {
  const { cardNumbers, expiration, company, cvc, password } = useFormContext();

  const { Stack, setStep } = useStack<(typeof STEPS)[number]>('카드번호');

  useStepFlow({ setStep });

  const navigate = useNavigate();

  const handleGoCompletePage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/complete', {
      state: {
        firstCardNumber: cardNumbers.first.value,
        company
      }
    });
  };

  const buttonVisible = isFormValid({
    cardNumbers,
    expiration,
    cvc,
    password,
    company
  });

  return (
    <form className={styles.inputSectionWrapper} onSubmit={handleGoCompletePage}>
      <Stack>
        <Stack.Step name="카드번호">
          <CardNumberSection />
        </Stack.Step>

        <Stack.Step name="카드사">
          <CardCompanySection />
        </Stack.Step>

        <Stack.Step name="유효기간">
          <CardExpirationSection />
        </Stack.Step>
        <Stack.Step name="CVC">
          <CvcSection />
        </Stack.Step>

        <Stack.Step name="비밀번호">
          <PasswordSection />
        </Stack.Step>
      </Stack>
      {buttonVisible && <Button>확인</Button>}
    </form>
  );
}
