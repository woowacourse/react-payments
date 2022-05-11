import { memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { CardContextProvider } from 'contexts/CardContext';

import { AddCard, AddCardComplete, CardList } from 'pages';

import { PATH } from 'constants';

import GlobalStyle from 'GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <CardContextProvider>
        <Routes>
          <Route path={PATH.ADD_CARD} element={<AddCard />} />
          <Route path={PATH.ADD_CARD_COMPLETE} element={<AddCardComplete />} />
          <Route path={PATH.CARD_LIST} element={<CardList />} />
          <Route
            path={PATH.ALL}
            element={<Navigate replace to={PATH.CARD_LIST} />}
          />
        </Routes>
      </CardContextProvider>
    </>
  );
}

export default memo(App);
