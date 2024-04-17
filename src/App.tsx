import { useState } from 'react';
import styled from 'styled-components';
import CardNumberInput from './components/CardNumberInput';
import CardExpirationInput from './components/CardExpirationInput';
import CardOwnerInput from './components/CardOwnerInput';
import CardPreviewBox from './components/CardPreviewBox';
import './styles/reset.css';

const AppContainer = styled.div`
  padding: 77px 30px;
`;

const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 45px;
`;

function App() {
  const [cardNumber, setCardNumber] = useState<string[]>(['', '', '', '']);
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [owner, setOwner] = useState<string>('');

  return (
    <AppContainer>
      <CardPreviewBox cardNumber={cardNumber} month={month} year={year} owner={owner} />
      <CardForm>
        <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
        <CardExpirationInput month={month} setMonth={setMonth} setYear={setYear} />
        <CardOwnerInput setOwner={setOwner} />
      </CardForm>
    </AppContainer>
  );
}

export default App;
