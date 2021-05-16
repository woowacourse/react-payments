import React, { useReducer } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { CardsContext } from './cardsContext';
import reducer from './reducer';
import { PATH } from './constants';
import { AddCardForm, EditCardNickname, CardList } from './pages';

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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cards } = state;

  return (
    <CardsContext.Provider value={dispatch}>
      <BrowserRouter>
        <Route exact path={PATH.ROOT} render={() => <CardList cards={cards} />} />
        <Route exact path={PATH.ADD_CARD_FORM} render={() => <AddCardForm cards={cards} />} />
        <Route
          exact
          path={`${PATH.EDIT_CARD_NICKNAME}/:id/:state?`}
          render={() => <EditCardNickname cards={cards} />}
        />
      </BrowserRouter>
    </CardsContext.Provider>
  );
}

export default App;
