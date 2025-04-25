import styled from '@emotion/styled';
import CVCInput from '../../components/CVCInput/CVCInput';
import CardNumberInput from '../../components/CardNumberInput/CardNumberInput';
import ExpirationDateInput from '../../components/ExpirationDateInput/ExpirationDateInput';
import PreviewCard from '../../components/PreviewCard/PreviewCard';
import Text from '../../components/Text/Text';
import { CARD_PAGE_TEXT } from './cardPageText';
import useInputArrayState from '../../hooks/useInputArrayState';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import Dropdown from '../../components/Dropdown/Dropdown';
import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export type HandleInputParams = {
  e: React.ChangeEvent<HTMLInputElement>;
  idx: number;
};

const StyledCardPage = styled.div`
  width: 40%;
  min-width: 400px;
  /* min-height: 100vh; */
  display: flex;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  overflow-y: auto;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.5);
`;

const CardNumberSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const PasswordSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const CVCSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ExpirationDateSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const DropdownSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardPage = () => {
  const [cardNumber, handleCardNumberInput] = useInputArrayState(4);
  const [expirationDate, handleExpirationDateInput] = useInputArrayState(2);
  const [cvc, handleCVCInput] = useInputArrayState(1);
  const [password, handlePasswordInput] = useInputArrayState(1);
  const [cardCompany, setCardCompany] = useState<string>('');

  const [cardNumberValid, setCardNumberValid] = useState<boolean>(false);
  const [expirationValid, setExpirationValid] = useState<boolean>(false);
  const [cvcValid, setCvcValid] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleCardCompanySelect = (value: string) => {
    setCardCompany(value);
  };

  const navigateToSuccessPage = () => {
    navigate(`/registered`, {
      state: {
        cardNumber: `${cardNumber[0]}`,
        cardCompany: `${cardCompany}`,
      },
    });
  };

  useEffect(() => {
    if (passwordValid && cvcValid && expirationValid && cardNumberValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [cardNumberValid, cvcValid]);

  return (
    <StyledCardPage>
      <PreviewCard
        cardNumber={cardNumber}
        expirationDate={expirationDate}
        cardCompany={cardCompany}
      />

      {cardNumberValid && cardCompany !== '' && expirationValid && cvcValid && (
        <PasswordSection>
          <Text type="title" text={CARD_PAGE_TEXT.PASSWORD_TITLE} />
          <Text type="subTitle" text={CARD_PAGE_TEXT.PASSWORD_SUBTITLE} />
          <PasswordInput
            values={password}
            onChange={handlePasswordInput}
            onValidChange={setPasswordValid}
          />
        </PasswordSection>
      )}

      {cardNumberValid && cardCompany !== '' && expirationValid && (
        <CVCSection>
          <Text type="title" text={CARD_PAGE_TEXT.CVC_TITLE} />
          <CVCInput values={cvc} onChange={handleCVCInput} onValidChange={setCvcValid} />
        </CVCSection>
      )}

      {cardNumberValid && cardCompany !== '' && (
        <ExpirationDateSection>
          <Text type="title" text={CARD_PAGE_TEXT.EXPIRATION_TITLE} />
          <Text type="subTitle" text={CARD_PAGE_TEXT.EXPIRATION_SUBTITLE} />
          <ExpirationDateInput
            values={expirationDate}
            onChange={handleExpirationDateInput}
            onValidChange={setExpirationValid}
          />
        </ExpirationDateSection>
      )}

      {cardNumberValid && (
        <DropdownSection>
          <Text type="title" text={CARD_PAGE_TEXT.CARD_COMPANY_TITLE} />
          <Text type="subTitle" text={CARD_PAGE_TEXT.CARD_COMPANY_SUBTITLE} />
          <Dropdown selected={cardCompany} onChange={handleCardCompanySelect} />
        </DropdownSection>
      )}
      <CardNumberSection>
        <Text type="title" text={CARD_PAGE_TEXT.CARD_NUMBER_TITLE} />
        <Text type="subTitle" text={CARD_PAGE_TEXT.CARD_NUMBER_SUBTITLE} />
        <CardNumberInput
          values={cardNumber}
          onChange={handleCardNumberInput}
          onValidChange={setCardNumberValid}
        />
      </CardNumberSection>
      {isFormValid && <Button text={CARD_PAGE_TEXT.CHECK} onClick={navigateToSuccessPage}></Button>}
    </StyledCardPage>
  );
};

export default CardPage;
