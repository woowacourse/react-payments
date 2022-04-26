import React, { useState } from 'react';
import Card from './components/Card';
import InformationInput from './components/InformationInput';

function App() {
  const [cardNumber, setCardNumber] = useState({
    first: '',
    second: '',
    third: '',
    forth: '',
  });
  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title"> 카드 추가 </h2>
        <Card cardNumber="1111-2222-3333-4444" expirationDate="08/17" ownerName="Harry"></Card>
        <InformationInput cardNumber={cardNumber} setCardNumber={setCardNumber}></InformationInput>
      </div>
    </div>
  );
}

export default App;
