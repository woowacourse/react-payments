import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CardInfo } from '../../types/state';

import * as styled from './App.styled';
import Header from '../Header/Header';
import MyCardPage from '../Pages/MyCardPage/MyCardPage';
import CardRegisterPage from '../Pages/CardRegisterPage/CardRegisterPage';

const App = () => {
  const [cardInfoList, setCardInfoList] = useState<CardInfo[]>([]);

  return (
    <styled.App>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<MyCardPage cardInfoList={cardInfoList} />} />
          <Route path="/register" element={<CardRegisterPage setCardInfoList={setCardInfoList} />} />
        </Routes>
      </BrowserRouter>
    </styled.App>
  );
};

export default App;
