import {useState} from 'react';
import CardPreviewSection from './components/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/InfoInputSection/InfoInputSection';
import type {CardNumbersType} from '../../common/types/CardInfoType';
import styled from 'styled-components';

const CardRegisterPage = () => {
  const [cardNumbers, setCardNumbers] = useState<CardNumbersType>(['', '', '', '']);
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');

  return (
    <Wrapper>
      <Container>
        <CardPreviewSection cardNumbers={cardNumbers} expiryMonth={expiryMonth} expiryYear={expiryYear} />
        <InfoInputSection
          cardNumbers={cardNumbers}
          setCardNumbers={setCardNumbers}
          expiryMonth={expiryMonth}
          setExpiryMonth={setExpiryMonth}
          expiryYear={expiryYear}
          setExpiryYear={setExpiryYear}
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
