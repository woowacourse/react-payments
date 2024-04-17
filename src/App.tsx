import { useState } from 'react';
import './App.css';
import InputGroup from './components/InputGroup';
import { CARD_NUMBER, CARD_OWNER, CARD_PERIOD } from './constants/inputInformation';
import CardImage from './components/CardImage';

function App() {
  const [cardNumber, setCardNumber] = useState<string[]>(['']);
  const [cardPeriod, setCardPeriod] = useState<string[]>(['']);
  const [cardOwner, setCardOwner] = useState<string[]>(['']);

  return (
    <>
      <CardImage cardNumber={cardNumber} cardPeriod={cardPeriod} cardOwner={cardOwner} />
      <InputGroup setState={setCardNumber} section="number" />
      {cardNumber}
      <InputGroup setState={setCardPeriod} section="period" />
      {cardPeriod}
      <InputGroup setState={setCardOwner} section="owner" />
      {cardOwner}
    </>
  );
}

export default App;
