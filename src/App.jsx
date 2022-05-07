import { useState, useReducer, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/common/Layout';
import Header from 'components/common/Header';
import MainPage from 'page/main';
import CardAppPage from 'page/cardAdd';
import ConfirmationPage from 'page/confirmation';

const initialState = {
  cards: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_CARD':
      return {
        cards: state.cards.concat(action.card),
      };
    case 'SET_ALIAS':
      return {
        cards: state.cards.map((card) =>
          card.id === action.id ? { ...card, alias: action.alias } : card,
        ),
      };
    default:
      return state;
  }
};

export const CardDispatch = createContext(null);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [title] = useState('보유카드');

  return (
    <Layout>
      <CardDispatch.Provider value={{ state, dispatch }}>
        <Header title={title} />
        <BrowserRouter>
          <Routes>
            <Route path="/react-payments/" element={<MainPage />}></Route>
            <Route path="/react-payments/add" element={<CardAppPage />}></Route>
            <Route path="/react-payments/confirm" element={<ConfirmationPage />}></Route>
          </Routes>
        </BrowserRouter>
      </CardDispatch.Provider>
    </Layout>
  );
};

export default App;
