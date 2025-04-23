import { useState } from 'react';
import CardNumbersInput from './components/CardNumbersInput/CardNumbersInput';
import CardExpiryInput from './components/CardExpiryInput/CardExpiryInput';
import CVCInput from './components/CVCInput/CVCInput';
import CardPreview from './components/CardPreview/CardPreview';
import CardBrandInput from './components/CardBrandInput/CardBrandInput';
import { CARD_VALIDATION_INFO } from './constants/cardValidationInfo';
import './App.css';
import CardPasswordInput from './components/CardPasswordInput/CardPasswordInput';

function App() {
  const [cardNumbers, setCardNumbers] = useState(
    Array(CARD_VALIDATION_INFO.TOTAL_CARD_INPUTS).fill('')
  );
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [CVC, setCVC] = useState('');
  const [brand, setBrand] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="app">
      <CardPreview cardNumbers={cardNumbers} month={month} year={year} />
      <form>
        <CardNumbersInput
          cardNumbers={cardNumbers}
          setCardNumbers={setCardNumbers}
        />
        <CardBrandInput brand={brand} setBrand={setBrand} />
        <CardExpiryInput
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
        />
        <CVCInput CVC={CVC} setCVC={setCVC} />
        <CardPasswordInput password={password} setPassword={setPassword} />
      </form>
    </div>
  );
}

export default App;
