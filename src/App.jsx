import { Route, Routes } from 'react-router-dom';

import { PATH } from 'constants';
import CardListPage from 'pages/CardListPage';
import CardAddPage from 'pages/CardAddPage';
import CardAddSuccessPage from 'pages/CardAddSuccessPage';
import CardInfoContextProvider from 'CardInfoContextProvider';

function App() {
  return (
    <CardInfoContextProvider>
      <Routes>
        <Route path={PATH.REACT_PAYMENTS} element={<CardListPage />} />
        <Route path={PATH.CARD_ADD} element={<CardAddPage />} />
        <Route path={PATH.CARD_ADD_SUCCESS} element={<CardAddSuccessPage />} />
      </Routes>
    </CardInfoContextProvider>
  );
}

export default App;
