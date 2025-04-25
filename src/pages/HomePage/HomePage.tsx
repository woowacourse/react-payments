import { FormEvent } from 'react';
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
  return (
    <div className={styles.wrapper}>
      <CardPreview cardNumbers={cardNumbers} company={company} expiration={expiration} />
      <Spacing size={45} />
      <form className={styles.inputSectionWrapper} onSubmit={(e) => handleGoCompletePage(e)}>
        <PasswordSection password={password} handlePasswordChange={handlePasswordChange} />
        <CvcSection cvc={cvc} handleCvcChange={handleCvcChange} />
        <CardCompanySection value={company} onSelect={handleCompanySelect} />
        <CardExpirationSection expiration={expiration} onExpirationChange={handleExpirationChange} ref={expirationRef} />
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
