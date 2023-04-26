import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CardInfoListContext from '../../contexts/CardInfoListContext';

import { useCardInfoList } from '../../hooks/useCardInfoList';

import * as styled from './App.styled';
import Header from '../Header/Header';
import MyCardPage from '../Pages/MyCardPage/MyCardPage';
import CardRegisterPage from '../Pages/CardRegisterPage/CardRegisterPage';

const App = () => {
  const { cardInfoList, setCardInfoList } = useCardInfoList();

  return (
    <styled.App>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <CardInfoListContext.Provider value={{ cardInfoList, setCardInfoList }}>
          <Routes>
            <Route path="/" element={<MyCardPage />} />
            <Route path="/register" element={<CardRegisterPage />} />
          </Routes>
        </CardInfoListContext.Provider>
      </BrowserRouter>
    </styled.App>
  );
};

export default App;
