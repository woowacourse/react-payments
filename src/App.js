import React, { useState } from 'react';
import { AddCardForm, CardCompanySelection, SecurityCodeGuide } from './components';
import { Modal } from './stories/components';

function App() {
  const [serialNumber, setSerialNumber] = useState('');
  const [cardCompany, setCardCompany] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [userName, setUserName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState({ first: '', second: '' });
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalContents, setModalContents] = useState('cardSelection');

  const onSetModalContents = (name) => {
    setModalContents(name);

    setIsModalOpened(true);
  };

  const onSetCardCompany = (name) => {
    setCardCompany(name);

    setIsModalOpened(false);
  };

  return (
    <>
      <AddCardForm
        serialNumber={serialNumber}
        setSerialNumber={setSerialNumber}
        cardCompany={cardCompany}
        setCardCompany={setCardCompany}
        expirationDate={expirationDate}
        setExpirationDate={setExpirationDate}
        userName={userName}
        setUserName={setUserName}
        securityCode={securityCode}
        setSecurityCode={setSecurityCode}
        password={password}
        setPassword={setPassword}
        onSetModalContents={onSetModalContents}
      />
      {isModalOpened && (
        <Modal onCloseModal={() => setIsModalOpened(false)}>
          {modalContents === 'cardSelection' && (
            <CardCompanySelection onSetCardCompany={onSetCardCompany}></CardCompanySelection>
          )}
          {modalContents === 'questionMark' && <SecurityCodeGuide></SecurityCodeGuide>}
        </Modal>
      )}
    </>
  );
}

export default App;
