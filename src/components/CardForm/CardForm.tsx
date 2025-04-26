// pages/CardForm.tsx
import { FormEvent } from 'react';
import CardNumberSection, { CardNumberSectionProps } from '../../components/CardNumberSection/CardNumberSection';
import CardExpirationSection, { CardExpirationSectionProps } from '../../components/CardExpirationSection/CardExpirationSection';
import CardCompanySection, { CardCompanySectionProps } from '../../components/CardCompanySection/CardCompanySection';
import CvcSection, { CvcSectionProps } from '../../components/CvcSection/CvcSection';
import PasswordSection, { PasswordSectionProps } from '../../components/PasswordSection/PasswordSection';
import Button from '../../components/Button/Button';
import styles from '../../../src/pages/HomePage/HomePage.module.css'; // 같은 스타일 재사용

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
  Stack: any;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  buttonVisible: boolean;
};

export function CardForm({ formState, Stack, handleSubmit, buttonVisible }: Props) {
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

  return (
    <form className={styles.inputSectionWrapper} onSubmit={handleSubmit}>
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
