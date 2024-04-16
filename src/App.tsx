import { useState } from 'react';
import './App.css';
import InputGroup from './components/InputGroup';
import { CARD_NUMBER, CARD_OWNER, CARD_PERIOD } from './constants/inputInformation';

function App() {
  const [cardNumber, setCardNumber] = useState<string[]>(['']);
  const [cardPeriod, setCardPeriod] = useState<string[]>(['']);
  const [cardOwner, setCardOwner] = useState<string[]>(['']);

  return (
    <>
      <InputGroup setState={setCardNumber} inputType={CARD_NUMBER} />
      {cardNumber}
      <InputGroup setState={setCardPeriod} inputType={CARD_PERIOD} />
      {cardPeriod}
      <InputGroup setState={setCardOwner} inputType={CARD_OWNER} />
      {cardOwner}
    </>
  );
}

export default App;
