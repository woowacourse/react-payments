// pages/HomePage.tsx
import { FormEvent, useEffect } from 'react';
import styles from './HomePage.module.css';
import CardNumberSection from '../../components/CardNumberSection/CardNumberSection';
import CardExpirationSection from '../../components/CardExpirationSection/CardExpirationSection';
import CvcSection from '../../components/CvcSection/CvcSection';
import CardCompanySection from '../../components/CardCompanySection/CardCompanySection';
import PasswordSection from '../../components/PasswordSection/PasswordSection';
import Spacing from '../../components/Spacing/Spacing';
import Button from '../../components/Button/Button';
import CardPreview from '../../components/CardPreview/CardPreview';
import { useNavigate } from 'react-router';
import { isFormValid } from '../../validation/isFormValid';
import useExpiration from '../../hooks/useExpiration';
import useCardNumbers from '../../hooks/useCardNumbers';
import useCvc from '../../hooks/useCvc';
import usePassword from '../../hooks/usePassword';
import useCompany from '../../hooks/useCompany';
import { useStack } from '../../hooks/useStack';

export default function HomePage() {
  const { expiration, handleExpirationChange, expirationRef } = useExpiration();
  const { cardNumbers, handleCardNumberChange, cardInputRefs, getCardNumberErrorMessage } = useCardNumbers();
  const { cvc, handleCvcChange } = useCvc();
  const { password, handlePasswordChange } = usePassword();
  const { company, handleCompanySelect } = useCompany();

  const navigate = useNavigate();

  const steps = ['카드번호', '유효기간', '카드사', 'CVC', '비밀번호'] as const;
  const { Stack, setStep } = useStack<(typeof steps)[number]>('카드번호');

  const isCardNumbersValid = Object.values(cardNumbers).every(({ value, isError }) => value.length === 4 && !isError);
  const isExpirationValid = Object.values(expiration).every(({ value, errorMessage }) => value.length === 2 && errorMessage === '');
  const isCompanyValid = company !== '';
  const isCvcValid = cvc.value.length === 3 && cvc.errorMessage === '';

  const handleGoCompletePage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/complete', {
      state: {
        firstCardNumber: cardNumbers.first.value,
        company
      }
    });
  };

  useEffect(() => {
    if (isCardNumbersValid) setStep('유효기간');
  }, [isCardNumbersValid]);

  useEffect(() => {
    if (isExpirationValid) setStep('카드사');
  }, [isExpirationValid]);

  useEffect(() => {
    if (isCompanyValid) setStep('CVC');
  }, [isCompanyValid]);

  useEffect(() => {
    if (isCvcValid) setStep('비밀번호');
  }, [isCvcValid]);

  const buttonVisible = isFormValid({ cardNumbers, expiration, cvc, password, company });

  return (
    <div className={styles.wrapper}>
      <CardPreview cardNumbers={cardNumbers} company={company} expiration={expiration} />
      <Spacing size={45} />

      <form className={styles.inputSectionWrapper} onSubmit={handleGoCompletePage}>
        <Stack>
          <Stack.Step name="카드번호">
            <CardNumberSection
              cardNumbers={cardNumbers}
              onCardNumbersChange={handleCardNumberChange}
              inputRefs={cardInputRefs}
              getCardNumberErrorMessage={getCardNumberErrorMessage}
            />
          </Stack.Step>

          <Stack.Step name="유효기간">
            <CardExpirationSection expiration={expiration} onExpirationChange={handleExpirationChange} ref={expirationRef} />
          </Stack.Step>

          <Stack.Step name="카드사">
            <CardCompanySection value={company} onSelect={handleCompanySelect} />
          </Stack.Step>

          <Stack.Step name="CVC">
            <CvcSection cvc={cvc} handleCvcChange={handleCvcChange} />
          </Stack.Step>

          <Stack.Step name="비밀번호">
            <PasswordSection password={password} handlePasswordChange={handlePasswordChange} />
          </Stack.Step>
        </Stack>
        {buttonVisible ? <Button>확인</Button> : null}
      </form>
    </div>
  );
}
