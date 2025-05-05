import { useContext, useMemo } from 'react';
import '../../styles/index.css';
import styles from './CardRegistrationPage.module.css';
import CardNumberSection from '../../components/CardNumberSection/CardNumberSection';
import CardExpirationSection from '../../components/CardExpirationSection/CardExpirationSection';
import CardPreview from '../../components/CardPreview/CardPreview';
import CvcSection from '../../components/CvcSection/CvcSection';
import { CardLogo } from '../../types/card';
import CardCompanySection from '../../components/CardCompanySection/CardCompanySection';
import CardPasswordSection from '../../components/CardPasswordSection/CardPasswordSection';
import { handleCardLogoChange } from '../../utils/cardLogoUtils.ts';
import Button from '../../components/common/Button/Button.tsx';
import { useNavigate } from 'react-router-dom';
import { CardContext } from '../../contexts/CardContext.tsx';
import { ROUTE_PATH } from '../../constants/constants.ts';

export default function CardRegistrationPage() {
  const {
    cardNumbers,
    handleCardNumberChange,
    cardNumberError,
    cardCompany,
    handleSelectChange,
    cardExpiration,
    handleCardExpirationChange,
    cardExpirationError,
    cvc,
    handleCvcChange,
    cvcError,
    cardPassword,
    handleCardPasswordChange,
    cardPasswordError
  } = useContext(CardContext);

  const cardLogo = useMemo<CardLogo>(() => handleCardLogoChange(cardNumbers.first), [cardNumbers.first]);

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(ROUTE_PATH.CARD_REGISTRATION_COMPLETED);
  };

  const isCardNumberValid = Object.values(cardNumbers).every((value) => value !== '') && !cardNumberError;
  const isCardCompanySelected = !!cardCompany;
  const isExpirationValid =
    Object.values(cardExpiration).every((value) => value !== '') &&
    Object.values(cardExpirationError).every((value) => value === '');
  const isCvcValid = !!cvc && !cvcError;
  const isPasswordValid = !!cardPassword && !cardPasswordError;
  const isFormComplete =
    isCardNumberValid && isCardCompanySelected && isExpirationValid && isCvcValid && isPasswordValid;

  return (
    <div className={styles.container}>
      <CardPreview
        numbers={cardNumbers}
        cardLogo={cardLogo}
        cardCompany={cardCompany}
        cardExpiration={cardExpiration}
      />

      {isCardNumberValid && isCardCompanySelected && isExpirationValid && isCvcValid && (
        <CardPasswordSection
          cardPassword={cardPassword}
          handleCardPasswordChange={handleCardPasswordChange}
          cardPasswordError={cardPasswordError}
        />
      )}

      {isCardNumberValid && isCardCompanySelected && isExpirationValid && (
        <CvcSection cvc={cvc} handleCvcChange={handleCvcChange} cvcError={cvcError} />
      )}

      {isCardNumberValid && isCardCompanySelected && (
        <CardExpirationSection
          cardExpiration={cardExpiration}
          handleCardExpirationChange={handleCardExpirationChange}
          cardExpirationError={cardExpirationError}
        />
      )}

      {isCardNumberValid && <CardCompanySection cardCompany={cardCompany} handleSelectChange={handleSelectChange} />}

      <CardNumberSection
        cardNumbers={cardNumbers}
        handleCardNumberChange={handleCardNumberChange}
        cardNumberError={cardNumberError}
      />

      {isFormComplete && <Button text="확인" height="52px" onClick={handleSubmit} />}
    </div>
  );
}
