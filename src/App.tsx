import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyCardPage from './pages/MyCardPage/index';
import CardRegisterPage from './pages/CardRegisterPage/index';
import { useState } from 'react';
import { Header } from './components';

export interface CardNumbers {
  0: string;
  1: string;
  2: string;
  3: string;
}

export interface CardExpirationDate {
  month: string;
  year: string;
}

export interface CardPassword {
  0: string;
  1: string;
}

export interface CardInfo {
  id: string;
  numbers: CardNumbers;
  expirationDate: CardExpirationDate;
  securityCode: string;
  password: CardPassword;
  ownerName?: string;
}

const App = () => {
  const [cardList, setCardList] = useState<CardInfo[]>([]);

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<MyCardPage cardList={cardList} />} />
          <Route path="/register" element={<CardRegisterPage setCardList={setCardList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
