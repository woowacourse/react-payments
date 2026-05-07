import { useState } from 'react';
import styled from 'styled-components';
import CardPreviewSection from './components/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/InfoInputSection/InfoInputSection';
import type { CardBrandId } from '../../common/types/CardPreview';

const CardRegisterPage = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cardBrandId, setCardBrandId] = useState<CardBrandId | null>(null);

  const handleCardNumbersChange = (cardNumbers: string[]) => {
    setCardNumbers(cardNumbers);
  };

  const handleExpiryMonthChange = (expiryMonth: string) => {
    setExpiryMonth(expiryMonth);
  };

  const handleExpiryYearChange = (expiryYear: string) => {
    setExpiryYear(expiryYear);
  };

  const handleCardBrandChange = (cardBrandId: CardBrandId | null) => {
    setCardBrandId(cardBrandId);
  };

  const cardPreviewInfo = {
    cardNumbers,
    expiryMonth,
    expiryYear,
    cardBrandId,
  };

  const cardFormHandlers = {
    handleCardNumbersChange,
    handleExpiryMonthChange,
    handleExpiryYearChange,
    handleCardBrandChange,
  };

  return (
    <Wrapper>
      <Container>
        <CardPreviewSection cardPreviewInfo={cardPreviewInfo} />
        <InfoInputSection
          cardPreviewInfo={cardPreviewInfo}
          cardFormHandlers={cardFormHandlers}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  max-width: 376px;
  max-height: 700px;
`;

export default CardRegisterPage;
