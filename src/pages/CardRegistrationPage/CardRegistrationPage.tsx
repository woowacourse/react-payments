import { ChangeEvent, useMemo } from 'react';
import '../../styles/index.css';
import styles from './CardRegistrationPage.module.css';
import CardNumberSection from '../../components/CardNumberSection/CardNumberSection';
import CardExpirationSection from '../../components/CardExpirationSection/CardExpirationSection';
import CardPreview from '../../components/CardPreview/CardPreview';
import CvcSection from '../../components/CvcSection/CvcSection';
import { CardCompany, CardLogo, CardNumber } from '../../types/card';
import CardCompanySection from '../../components/CardCompanySection/CardCompanySection';
import CardPasswordSection from '../../components/CardPasswordSection/CardPasswordSection';
import { useCardExpirationInput } from '../../hooks/useCardExpirationInput';
import { useCvcInput } from '../../hooks/useCvcInput';
import { handleCardLogoChange } from '../../utils/cardLogoUtils.ts';
import { useCardPasswordInput } from '../../hooks/useCardPasswordInput.ts';
import Button from '../../components/common/Button/Button.tsx';
import { useNavigate } from 'react-router-dom';

type Props = {
  cardNumbers: CardNumber;
  handleCardNumberChange: (key: keyof CardNumber, value: string) => void;
  cardNumberError: string;
  cardCompany: CardCompany;
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export default function CardRegistrationPage({
  cardNumbers,
  handleCardNumberChange,
  cardNumberError,
  cardCompany,
  handleSelectChange
}: Props) {
  const { cardExpiration, handleCardExpirationChange, cardExpirationError } = useCardExpirationInput();
  const { cvc, handleCvcChange, cvcError } = useCvcInput();
  const { cardPassword, handleCardPasswordChange, cardPasswordError } = useCardPasswordInput();
  const cardLogo = useMemo<CardLogo>(() => handleCardLogoChange(cardNumbers.first), [cardNumbers.first]);

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/card-registration-completed');
  };

  return (
    <div className={styles.container}>
      <CardPreview
        numbers={cardNumbers}
        cardLogo={cardLogo}
        cardCompany={cardCompany}
        cardExpiration={cardExpiration}
      />
      {cvc && !cvcError && (
        <CardPasswordSection
          cardPassword={cardPassword}
          handleCardPasswordChange={handleCardPasswordChange}
          cardPasswordError={cardPasswordError}
        />
      )}
      {Object.values(cardExpiration).every((value) => value !== '') &&
        Object.values(cardExpirationError).every((value) => value === '') && (
          <CvcSection cvc={cvc} handleCvcChange={handleCvcChange} cvcError={cvcError} />
        )}
      {cardCompany && (
        <CardExpirationSection
          cardExpiration={cardExpiration}
          handleCardExpirationChange={handleCardExpirationChange}
          cardExpirationError={cardExpirationError}
        />
      )}
      {Object.values(cardNumbers).every((value) => value !== '') && !cardNumberError && (
        <CardCompanySection cardCompany={cardCompany} handleSelectChange={handleSelectChange} />
      )}
      <CardNumberSection
        cardNumbers={cardNumbers}
        handleCardNumberChange={handleCardNumberChange}
        cardNumberError={cardNumberError}
      />
      {Object.values(cardNumbers).every((value) => value !== '') &&
        !cardNumberError &&
        cardCompany &&
        cvc &&
        !cvcError &&
        cardPassword &&
        !cardPasswordError && <Button text="확인" height="52px" onClick={handleSubmit} />}
    </div>
  );
}
