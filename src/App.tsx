import styled from 'styled-components';
import Card from './components/card/Card';
import {useState} from 'react';
import CardNumberSection from './components/form/CardNumberSection';
import ExpirationDateSection from './components/form/ExpirationDateSection';
import CardCvcSection from './components/form/CardCvcSection';
import {CardNumber, ExpirationDate} from './type/Card';

function App() {
  const [cardNumber, setCardNumber] = useState<CardNumber>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const [expirationDate, setExpirationDate] = useState<ExpirationDate>({
    month: '',
    year: '',
  });
  const [cvcNumber, setcvcNumber] = useState('');

  return (
    <MainContainer>
      <Card cardNumbers={cardNumber} expirationDate={expirationDate} />
      <CardNumberSection
        cardNumber={cardNumber}
        onCardNumberChange={(order, value) =>
          setCardNumber((prev) => ({
            ...prev,
            [order]: value,
          }))
        }
      />
      <ExpirationDateSection
        expirationDate={expirationDate}
        onExpirationDateChange={(order, value) =>
          setExpirationDate((prev) => ({
            ...prev,
            [order]: value,
          }))
        }
      />
      <CardCvcSection
        cvcNumber={cvcNumber}
        onCvcNumberChange={(value) => setcvcNumber(value)}
      />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 376px;
  padding: 77px 30px 20px;
  margin: auto;
`;
