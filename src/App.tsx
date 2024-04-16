import { useState } from 'react';
import './App.css';
import InputGroup from './components/InputGroup';
import { CARD_NUMBER, CARD_OWNER, CARD_PERIOD } from './constants/inputInfomation';

function App() {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardPeriod, setCardPeriod] = useState<string>('');
  const [cardOwner, setCardOwner] = useState<string>('');

  return (
    <>
      <InputGroup setState={(e) => setCardNumber(e)} inputType={CARD_NUMBER} />
      {cardNumber}
      <InputGroup setState={(e) => setCardPeriod(e)} inputType={CARD_PERIOD} />
      {cardPeriod}
      <InputGroup setState={(e) => setCardOwner(e)} inputType={CARD_OWNER} />
      {cardOwner}
    </>
  );
}

export default App;
