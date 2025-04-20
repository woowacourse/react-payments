import styled from '@emotion/styled';
import { useState } from 'react';
import { CARD_PAGE_TEXT } from '../../constants/cardPageText';
import PreviewCard from './components/PreviewCard/PreviewCard';
import Text from '../../components/Text/Text';
import CardNumberInput from './components/CardNumberInput/CardNumberInput';
import ExpirationDateInput from './components/ExpirationDateInput/ExpirationDateInput';
import CVCInput from './components/CVCInput/CVCInput';

export type HandleInputParams = {
  e: React.ChangeEvent<HTMLInputElement>;
  idx: number;
};

const StyledCardPage = styled.div`
  width: 40%;
  min-width: 400px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
`;

const CardPage = () => {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState(['', '']);
  const [cvc, setCvc] = useState(['']);

  const handleCardNumberInput = ({ e, idx }: HandleInputParams) => {
    setCardNumber((prev) => {
      const updated = [...prev];
      updated[idx] = e.target.value;
      return updated;
    });
  };
  const handleExpirationDateInput = ({ e, idx }: HandleInputParams) => {
    setExpirationDate((prev) => {
      const updated = [...prev];
      updated[idx] = e.target.value;
      return updated;
    });
  };

  const handleCVCInput = ({ e, idx }: HandleInputParams) => {
    setCvc((prev) => {
      const updated = [...prev];
      updated[idx] = e.target.value;
      return updated;
    });
  };

  return (
    <StyledCardPage>
      <PreviewCard cardNumber={cardNumber} expirationDate={expirationDate} />
      <Text type="title" text={CARD_PAGE_TEXT.CARD_NUMBER_TITLE} />
      <Text type="subTitle" text={CARD_PAGE_TEXT.CARD_NUMBER_SUBTITLE} />

      <CardNumberInput values={cardNumber} onChange={handleCardNumberInput} />

      <Text type="title" text={CARD_PAGE_TEXT.EXPIRATION_TITLE} />
      <Text type="subTitle" text={CARD_PAGE_TEXT.EXPIRATION_SUBTITLE} />

      <ExpirationDateInput values={expirationDate} onChange={handleExpirationDateInput} />

      <Text type="title" text={CARD_PAGE_TEXT.CVC_TITLE} />

      <CVCInput values={cvc} onChange={handleCVCInput} />
    </StyledCardPage>
  );
};

export default CardPage;
