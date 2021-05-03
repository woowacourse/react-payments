import React, { useState } from 'react';
import { CardCompanySelection, SecurityCodeGuide } from './components';
import { AddCardForm, AddCardComplete, CardList } from './pages';
import { Modal } from './components';
import { CARD_COMPANY } from './constants';
import { Route, BrowserRouter } from 'react-router-dom';
import { CardsProvider } from './cardsContext';

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalContents, setModalContents] = useState('cardSelection');

  const [serialNumber, setSerialNumber] = useState('');
  const [cardCompany, setCardCompany] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [userName, setUserName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState({ first: '', second: '' });
  const [cardNickName, setCardNickName] = useState('');

  const onSetModalContents = (name) => {
    setModalContents(name);

    setIsModalOpened(true);
  };

  const onSetCardCompany = (name) => {
    setCardCompany(name);
    setCardNickName(CARD_COMPANY[name].NAME);

    setIsModalOpened(false);
  };

  return (
    <CardsProvider>
      <BrowserRouter>
        <Route exact path="/">
          <CardList></CardList>
        </Route>
        <Route exact path="/addCardForm">
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
        </Route>
        <Route exact path="/addCardComplete">
          <AddCardComplete
            serialNumber={serialNumber}
            cardCompany={cardCompany}
            expirationDate={expirationDate}
            userName={userName}
            cardNickName={cardNickName}
            setCardNickName={setCardNickName}
          />
        </Route>
      </BrowserRouter>
      {isModalOpened && (
        <Modal onCloseModal={() => setIsModalOpened(false)}>
          {modalContents === 'cardSelection' && (
            <CardCompanySelection onSetCardCompany={onSetCardCompany}></CardCompanySelection>
          )}
          {modalContents === 'questionMark' && <SecurityCodeGuide />}
        </Modal>
      )}
    </CardsProvider>
  );
}

export default App;
