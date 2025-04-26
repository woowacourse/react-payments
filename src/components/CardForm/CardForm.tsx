// pages/CardForm.tsx
import { FormEvent } from 'react';
import CardNumberSection, { CardNumberSectionProps } from '../../components/CardNumberSection/CardNumberSection';
import CardExpirationSection, { CardExpirationSectionProps } from '../../components/CardExpirationSection/CardExpirationSection';
import CardCompanySection, { CardCompanySectionProps } from '../../components/CardCompanySection/CardCompanySection';
import CvcSection, { CvcSectionProps } from '../../components/CvcSection/CvcSection';
import PasswordSection, { PasswordSectionProps } from '../../components/PasswordSection/PasswordSection';
import Button from '../../components/Button/Button';
import styles from '../../../src/pages/HomePage/HomePage.module.css';
import { isFormValid } from '../../validation/isFormValid';
import { useNavigate } from 'react-router';
import { useStack } from '../../hooks/useStack';
import { useStepFlow } from '../../hooks/useStepFlow';
import { STEPS } from '../../constants';

export type CardFormProps = {
  cardNumbers: CardNumberSectionProps['cardNumbers'];
  onCardNumbersChange: CardNumberSectionProps['onCardNumbersChange'];
  cardInputRefs: CardNumberSectionProps['inputRefs'];
  getCardNumberErrorMessage: CardNumberSectionProps['getCardNumberErrorMessage'];
  expiration: CardExpirationSectionProps['expiration'];
  handleExpirationChange: CardExpirationSectionProps['onExpirationChange'];
  expirationRef: CardExpirationSectionProps['ref'];
  company: CardCompanySectionProps['value'];
  handleCompanySelect: CardCompanySectionProps['onSelect'];
  cvc: CvcSectionProps['cvc'];
  handleCvcChange: CvcSectionProps['handleCvcChange'];
  password: PasswordSectionProps['password'];
  handlePasswordChange: PasswordSectionProps['handlePasswordChange'];
};

type Props = {
  formState: CardFormProps;
};

export function CardForm({ formState }: Props) {
  const {
    cardNumbers,
    onCardNumbersChange,
    cardInputRefs,
    getCardNumberErrorMessage,
    expiration,
    handleExpirationChange,
    expirationRef,
    company,
    handleCompanySelect,
    cvc,
    handleCvcChange,
    password,
    handlePasswordChange
  } = formState;

  const { Stack, setStep } = useStack<(typeof STEPS)[number]>('카드번호');

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
    <form className={styles.inputSectionWrapper} onSubmit={handleGoCompletePage}>
      <Stack>
        <Stack.Step name="카드번호">
          <CardNumberSection
            cardNumbers={cardNumbers}
            onCardNumbersChange={onCardNumbersChange}
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
      {buttonVisible && <Button>확인</Button>}
    </form>
  );
}
