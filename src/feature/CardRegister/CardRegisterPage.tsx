import CardPreviewSection from './components/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/InfoInputSection/InfoInputSection';
import {useCardNumbers} from './hooks/useCardNumbers';
import {useExpiryDate} from './hooks/useExpiryDate';
import {useCvcNumber} from './hooks/useCvcNumber';
import styled from 'styled-components';

const CardRegisterPage = () => {
  const numberField = useCardNumbers();
  const expiryField = useExpiryDate();
  const cvcField = useCvcNumber();

  return (
    <Wrapper>
      <Container>
        <CardPreviewSection
          cardNumbers={numberField.cardNumbers}
          expiryMonth={expiryField.expiryMonth}
          expiryYear={expiryField.expiryYear}
        />
        <InfoInputSection
          numberField={numberField}
          expiryField={expiryField}
          cvcField={cvcField}
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
