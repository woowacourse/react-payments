import React, { useState, useReducer } from 'react';
import { CardCompanySelection, SecurityCodeGuide } from './components';
import { AddCardForm, AddCardComplete, CardList } from './pages';
import { Modal } from './components';
import { PATH } from './constants';
import { Route, BrowserRouter } from 'react-router-dom';
import { CardsContext } from './cardsContext';
import reducer from './reducer';

const initialState = {
  cards: [
    {
      id: 0,
      userName: 'POCO',
      company: 'POCO',
      number: '1234123412341234',
      expirationDate: '12/30',
      securityCode: '123',
      password: { first: '1', second: '2' },
      nickName: 'POCO',
    },
  ],
};

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalContents, setModalContents] = useState('cardSelection');
  const [cardCompany, setCardCompany] = useState('');

  const [state, dispatch] = useReducer(reducer, initialState);

  const { cards } = state;

  const onSetModalContents = (name) => {
    setModalContents(name);

    setIsModalOpened(true);
  };

  return (
    <CardsContext.Provider value={dispatch}>
      <BrowserRouter>
        <Route exact path={PATH.ROOT}>
          <CardList cards={cards}></CardList>
        </Route>
        <Route exact path={PATH.ADD_CARD_FORM}>
          <AddCardForm
            onSetModalContents={onSetModalContents}
            cardCompany={cardCompany}
            setCardCompany={setCardCompany}
          />
        </Route>
        <Route exact path={PATH.ADD_CARD_COMPLETE}>
          <AddCardComplete />
        </Route>
      </BrowserRouter>
      {isModalOpened && (
        <Modal onCloseModal={() => setIsModalOpened(false)}>
          {modalContents === 'cardSelection' && (
            <CardCompanySelection
              onCloseModal={() => setIsModalOpened(false)}
              setCardCompany={setCardCompany}
            ></CardCompanySelection>
          )}
          {modalContents === 'questionMark' && <SecurityCodeGuide />}
        </Modal>
      )}
    </CardsContext.Provider>
  );
}

export default App;
