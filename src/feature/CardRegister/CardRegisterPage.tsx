import { useState } from 'react';
import CardPreviewSection from './components/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/InfoInputSection/InfoInputSection';
import styled from 'styled-components';

const CardRegisterPage = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');

  const cardPreviewInfo = {
    cardNumbers,
    expiryMonth,
    expiryYear,
  };

  const cardFormHandlers = {
    setCardNumbers,
    setExpiryMonth,
    setExpiryYear,
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
