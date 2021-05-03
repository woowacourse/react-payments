import React, { useState, useReducer } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { AddCardForm, AddCardComplete, CardList } from './pages';
import { CardCompanySelection, SecurityCodeGuide, Modal } from './components';
import { PATH } from './constants';
import { CardsContext } from './cardsContext';
import reducer from './reducer';
import useForm from './hooks/useForm';

const initialState = {
  cards: [
    {
      id: 0,
      company: 'POCO',
      number: '1234123412341234',
      expirationDate: '12/30',
      userName: 'POCO',
      securityCode: '123',
      password: { first: '1', second: '2' },
      nickname: 'POCO',
    },
  ],
};

const initialAddCardForm = {
  number: '',
  company: '',
  expirationDate: '',
  userName: '',
  securityCode: '',
  password: { first: '', second: '' },
};

function App() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalContents, setModalContents] = useState('cardSelection');

  const [currentCardId, setCurrentCardId] = useState();

  const [state, dispatch] = useReducer(reducer, initialState);

  const [
    { number, company, expirationDate, userName, securityCode, password },
    onInputChange,
    setInput,
    reset,
  ] = useForm(initialAddCardForm);

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
            number={number}
            company={company}
            expirationDate={expirationDate}
            userName={userName}
            securityCode={securityCode}
            password={password}
            onInputChange={onInputChange}
            setInput={setInput}
            setCurrentCardId={setCurrentCardId}
            reset={reset}
          />
        </Route>
        <Route exact path={PATH.ADD_CARD_COMPLETE}>
          <AddCardComplete cards={cards} currentCardId={currentCardId} />
        </Route>
      </BrowserRouter>
      {isModalOpened && (
        <Modal onCloseModal={() => setIsModalOpened(false)}>
          {modalContents === 'cardSelection' && (
            <CardCompanySelection
              onCloseModal={() => setIsModalOpened(false)}
              setInput={setInput}
            ></CardCompanySelection>
          )}
          {modalContents === 'questionMark' && <SecurityCodeGuide />}
        </Modal>
      )}
    </CardsContext.Provider>
  );
}

export default App;
