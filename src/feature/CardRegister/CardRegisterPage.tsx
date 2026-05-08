import {useState} from 'react';
import CardPreviewSection from './components/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/InfoInputSection/InfoInputSection';
import {useCardNumbers} from './hooks/useCardNumbers';
import styled from 'styled-components';

const CardRegisterPage = () => {
  const numberField = useCardNumbers();
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');

  return (
    <Wrapper>
      <Container>
        <CardPreviewSection
          cardNumbers={numberField.cardNumbers}
          expiryMonth={expiryMonth}
          expiryYear={expiryYear}
        />
        <InfoInputSection
          numberField={numberField}
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
