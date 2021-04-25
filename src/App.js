import React, { useState } from 'react';
import { AddCardForm } from './components';

function App() {
  const [serialNumber, setSerialNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [userName, setUserName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState({ first: '', second: '' });

  return (
    <>
      <AddCardForm
        serialNumber={serialNumber}
        setSerialNumber={setSerialNumber}
        expirationDate={expirationDate}
        setExpirationDate={setExpirationDate}
        userName={userName}
        setUserName={setUserName}
        securityCode={securityCode}
        setSecurityCode={setSecurityCode}
        password={password}
        setPassword={setPassword}
      />
    </>
  );
}

export default App;
