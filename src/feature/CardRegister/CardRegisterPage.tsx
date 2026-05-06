import {useState} from 'react';
import CardPreviewSection from './components/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/InfoInputSection/InfoInputSection';
import styled from 'styled-components';

const CardRegisterPage = () => {
  const [cardNumbers, setCardNumbers] = useState<[string, string, string, string]>(['', '', '', '']);
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');

  const cardInfo = {
    cardNumbers,
    expiryMonth,
    expiryYear,
  };

  const cardInfoHandlers = {
    setCardNumbers,
    setExpiryMonth,
    setExpiryYear,
  };

  return (
    <Wrapper>
      <Container>
        <CardPreviewSection cardInfo={cardInfo} />
        <InfoInputSection cardInfo={cardInfo} cardInfoHandlers={cardInfoHandlers} />
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
