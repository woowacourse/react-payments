import styled from '@emotion/styled';
import CVCInput from '../CVCInput/CVCInput';
import CardNumberInput from '../CardNumberInput/CardNumberInput';
import ExpirationDateInput from '../ExpirationDateInput/ExpirationDateInput';
import PreviewCard from '../PreviewCard/PreviewCard';
import Text from '../Text/Text';
import { CARD_PAGE_TEXT } from './cardPageText';
import useInputArrayState from '../../hooks/useInputArrayState';
import PasswordInput from '../PasswordInput/PasswordInput';
import Dropdown from '../Dropdown/Dropdown';
import { useEffect, useState } from 'react';

export type HandleInputParams = {
  e: React.ChangeEvent<HTMLInputElement>;
  idx: number;
};

const StyledCardPage = styled.div`
  width: 40%;
  min-width: 400px;
  min-height: 100vh;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  overflow-y: auto;
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

  const handleCardCompanySelect = (value: string) => {
    setCardCompany(value);
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
      <Text type="title" text={CARD_PAGE_TEXT.PASSWORD_TITLE} />
      <Text type="subTitle" text={CARD_PAGE_TEXT.PASSWORD_SUBTITLE} />
      <PasswordInput
        values={password}
        onChange={handlePasswordInput}
        onValidChange={setPasswordValid}
      />
      <Text type="title" text={CARD_PAGE_TEXT.CVC_TITLE} />
      <CVCInput values={cvc} onChange={handleCVCInput} onValidChange={setCvcValid} />
      <Text type="title" text={CARD_PAGE_TEXT.EXPIRATION_TITLE} />
      <Text type="subTitle" text={CARD_PAGE_TEXT.EXPIRATION_SUBTITLE} />
      <ExpirationDateInput
        values={expirationDate}
        onChange={handleExpirationDateInput}
        onValidChange={setExpirationValid}
      />
      <Text type="title" text={CARD_PAGE_TEXT.CARD_COMPANY_TITLE} />
      <Text type="subTitle" text={CARD_PAGE_TEXT.CARD_COMPANY_SUBTITLE} />
      <Dropdown selected={cardCompany} onChange={handleCardCompanySelect} />
      <Text type="title" text={CARD_PAGE_TEXT.CARD_NUMBER_TITLE} />
      <Text type="subTitle" text={CARD_PAGE_TEXT.CARD_NUMBER_SUBTITLE} />
      <CardNumberInput
        values={cardNumber}
        onChange={handleCardNumberInput}
        onValidChange={setCardNumberValid}
      />
      {isFormValid && <button>확인</button>}
    </StyledCardPage>
  );
};

export default CardPage;
