import styled from 'styled-components';

import CardholderNameContainer from './components/CardholderNameContainer';
import CardExpiryDateContainer from './components/CardExpiryDateContainer';
import CardNumbersContainer from './components/CardNumbersContainer';
import CardPreview from './components/CardPreview';

import useCardInfo from './hooks/useCardInfo';

const App = () => {
  const { cardNumbers, expiryDate, cardholderName } = useCardInfo();

  return (
    <AppLayout>
      <CardPreview cardNumbers={cardNumbers.data} expiryDate={expiryDate.data} cardholderName={cardholderName.data} />
      <CardInfoWrapper>
        <CardNumbersContainer {...cardNumbers} />
        <CardExpiryDateContainer {...expiryDate} />
        <CardholderNameContainer {...cardholderName} />
      </CardInfoWrapper>
    </AppLayout>
  );
};

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const CardInfoWrapper = styled.section`
  margin-top: 50px;
`;

export default App;
