import React, { useEffect, useState } from 'react';
import { CardCompanySelection, CardList, SecurityCodeGuide } from './components';
import { AddCardForm, AddCardComplete } from './pages';
import { Modal } from './components';
import { CARD_COMPANY } from './constants';
import { CardsProvider } from './cardsContext';

function App() {
  const [page, setPage] = useState('cardList');

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

  useEffect(() => {
    if (page === 'addCardForm') {
      setSerialNumber('');
      setCardCompany('');
      setExpirationDate('');
      setUserName('');
      setSecurityCode('');
      setPassword({ first: '', second: '' });
    }
  }, [page]);

  return (
    <CardsProvider>
      {page === 'cardList' && <CardList />}
      {page === 'addCardForm' && (
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
          setPage={setPage}
        />
      )}
      {page === 'addCardComplete' && (
        <AddCardComplete
          serialNumber={serialNumber}
          cardCompany={cardCompany}
          expirationDate={expirationDate}
          userName={userName}
          cardNickName={cardNickName}
          setCardNickName={setCardNickName}
          setPage={setPage}
        />
      )}
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
