import { FormEvent, useState } from 'react';
import styles from './HomePage.module.css';
import CardNumberSection from '../../components/CardNumberSection/CardNumberSection';
import CardExpirationSection from '../../components/CardExpirationSection/CardExpirationSection';
import CvcSection from '../../components/CvcSection/CvcSection';
import CardCompanySection from '../../components/CardCompanySection/CardCompanySection';
import useExpiration from '../../hooks/useExpiration';
import useCardNumbers from '../../hooks/useCardNumbers';
import useCvc from '../../hooks/useCvc';
import PasswordSection from '../../components/PasswordSection/PasswordSection';
import usePassword from '../../hooks/usePassword';
import Spacing from '../../components/Spacing/Spacing';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router';
import CardPreview from '../../components/CardPreview/CardPreview';
import { isFormValid } from '../../validation/isFormValid';
import useCompany from '../../hooks/useCompany';

export default function HomePage() {
  const { expiration, handleExpirationChange, expirationRef } = useExpiration();
  const { cardNumbers, handleCardNumberChange, cardInputRefs, getCardNumberErrorMessage } = useCardNumbers();
  const { cvc, handleCvcChange } = useCvc();
  const { password, handlePasswordChange } = usePassword();
  const { company, handleCompanySelect } = useCompany();

  const buttonVisible = isFormValid({ cardNumbers, expiration, cvc, password, company });

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

  const isCardNumbersValid = Object.values(cardNumbers).every(({ value, isError }) => value.length === 4 && !isError);
  const isExpirationValid = Object.values(expiration).every(({ value, errorMessage }) => value.length === 2 && errorMessage === '');
  const isCvcValid = cvc.value.length === 3 && cvc.errorMessage === '';
  const isCompanyValid = company !== '';

  return (
    <div className={styles.wrapper}>
      <CardPreview cardNumbers={cardNumbers} company={company} expiration={expiration} />
      <Spacing size={45} />
      <form className={styles.inputSectionWrapper} onSubmit={(e) => handleGoCompletePage(e)}>
        {isCardNumbersValid && isExpirationValid && isCvcValid && isCompanyValid && (
          <PasswordSection password={password} handlePasswordChange={handlePasswordChange} />
        )}
        {isCardNumbersValid && isExpirationValid && isCompanyValid && <CvcSection cvc={cvc} handleCvcChange={handleCvcChange} />}
        {isCardNumbersValid && isExpirationValid && <CardCompanySection value={company} onSelect={handleCompanySelect} />}
        {isCardNumbersValid && <CardExpirationSection expiration={expiration} onExpirationChange={handleExpirationChange} ref={expirationRef} />}
        <CardNumberSection
          cardNumbers={cardNumbers}
          onCardNumbersChange={handleCardNumberChange}
          inputRefs={cardInputRefs}
          getCardNumberErrorMessage={getCardNumberErrorMessage}
        />
        {buttonVisible && <Button>확인</Button>}
      </form>
    </div>
  );
}

// useFunnel.tsx

import { ReactElement, ReactNode } from 'react';

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export const useFunnel = (defaultStep: string) => {
  // state를 통해 현재 스텝을 관리한다.
  // setStep 함수를 통해 현재 스텝을 변경할 수 있다.
  const [step, setStep] = useState(defaultStep);

  // 각 단계를 나타내는 Step 컴포넌트
  // children을 통해 각 스텝의 컨텐츠를 렌더링 한다.
  const Step = (props: StepProps): ReactElement => {
    return <>{props.children}</>;
  };

  // 여러 단계의 Step 컴포넌트 중 현재 활성화된 스텝을 렌더링하는 Funnel
  // find를 통해 Step 중 현재 Step을 찾아 렌더링
  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find((childStep) => childStep.props.name === step);

    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep, currentStep: step } as const;
};
