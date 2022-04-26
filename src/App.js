import React, { useState } from 'react';
import Card from './components/Card';
import InputForm from './components/InputForm';
import { objectToString } from './utils/util';

function App() {
  const [cardNumber, setCardNumber] = useState({
    first: '',
    second: '',
    third: '',
    forth: '',
  });

  const [expirationDate, setExpirationDate] = useState({
    month: '',
    year: '',
  });

  const [ownerName, setOwnerName] = useState('');

  const [securityCode, setSecurityCode] = useState('');

  const [password, setPassword] = useState({
    first: '',
    second: '',
  });

  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title"> 카드 추가 </h2>
        <Card
          cardNumber={objectToString(cardNumber, ' ')}
          expirationDate={objectToString(expirationDate, '/')}
          ownerName={ownerName}
        ></Card>
        <InputForm
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          expirationDate={expirationDate}
          setExpirationDate={setExpirationDate}
          ownerName={ownerName}
          setOwnerName={setOwnerName}
          securityCode={securityCode}
          setSecurityCode={setSecurityCode}
          password={password}
          setPassword={setPassword}
        ></InputForm>
      </div>
    </div>
  );
}

export default App;
