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
import useValues from '../../hooks/useValues';

type CardFormProps = ReturnType<typeof useValues>['cardForm'];

export function CardForm(props: CardFormProps) {
  const { Stack, setStep } = useStack<(typeof STEPS)[number]>('카드번호');

  const { cardNumbers, company, expiration, cvc, password } = props;

  useStepFlow({ setStep, cvc: cvc.cvc, expiration: expiration.expiration, company: company.company, cardNumbers: cardNumbers.cardNumbers });

  const navigate = useNavigate();

  const handleGoCompletePage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/complete', {
      state: {
        firstCardNumber: cardNumbers.cardNumbers.first.value,
        company
      }
    });
  };

  const buttonVisible = isFormValid({
    cardNumbers: cardNumbers.cardNumbers,
    expiration: expiration.expiration,
    cvc: cvc.cvc,
    password: password.password,
    company: company.company
  });

  return (
    <form className={styles.inputSectionWrapper} onSubmit={handleGoCompletePage}>
      <Stack>
        <Stack.Step name="카드번호">
          <CardNumberSection {...cardNumbers} />
        </Stack.Step>

        <Stack.Step name="카드사">
          <CardCompanySection {...company} />
        </Stack.Step>

        <Stack.Step name="유효기간">
          <CardExpirationSection {...expiration} />
        </Stack.Step>
        <Stack.Step name="CVC">
          <CvcSection {...cvc} />
        </Stack.Step>

        <Stack.Step name="비밀번호">
          <PasswordSection {...password} />
        </Stack.Step>
      </Stack>
      {buttonVisible && <Button>확인</Button>}
    </form>
  );
}
