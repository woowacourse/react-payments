import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CardInfo } from './types/state';

import Header from './components/Header/Header';
import MyCardPage from './pages/MyCardPage/MyCardPage';
import CardRegisterPage from './pages/CardRegisterPage/CardRegisterPage';

const App = () => {
  const [cardInfoList, setCardInfoList] = useState<CardInfo[]>([]);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<MyCardPage cardInfoList={cardInfoList} />} />
          <Route path="/register" element={<CardRegisterPage setCardInfoList={setCardInfoList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
