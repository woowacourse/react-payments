import { useState } from 'react';
import styled from 'styled-components';
import CardPreviewSection from './components/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/InfoInputSection/InfoInputSection';
import type { CardCompanyId } from '../../common/types/CardPreview';
import { useNavigate } from 'react-router-dom';
import type { CardFormInfoType } from '../../common/types/CardPreviewInfoType';

const CardRegisterPage = () => {
  const navigate = useNavigate();

  const handleRegisterComplete = (cardFormInfo: CardFormInfoType) => {
    navigate('/complete', {
      state: cardFormInfo,
    });
  };

  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cardCompanyId, setCardCompanyId] = useState<CardCompanyId | null>(
    null,
  );

  const handleCardNumbersChange = (cardNumbers: string[]) => {
    setCardNumbers(cardNumbers);
  };

  const handleExpiryMonthChange = (expiryMonth: string) => {
    setExpiryMonth(expiryMonth);
  };

  const handleExpiryYearChange = (expiryYear: string) => {
    setExpiryYear(expiryYear);
  };

  const handleCardCompanyChange = (cardCompanyId: CardCompanyId | null) => {
    setCardCompanyId(cardCompanyId);
  };

  const cardPreviewInfo = {
    cardNumbers,
    expiryMonth,
    expiryYear,
    cardCompanyId,
  };

  const cardFormHandlers = {
    handleCardNumbersChange,
    handleExpiryMonthChange,
    handleExpiryYearChange,
    handleCardCompanyChange,
  };

  return (
    <Wrapper>
      <Container>
        <CardPreviewSection cardPreviewInfo={cardPreviewInfo} />
        <InfoInputSection
          cardPreviewInfo={cardPreviewInfo}
          cardFormHandlers={cardFormHandlers}
          onRegisterComplete={handleRegisterComplete}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  background-color: #d3d3d3;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 376px;
  height: min(700px, 100vh);
  overflow: hidden;

  background-color: #ffffff;
`;

export default CardRegisterPage;
