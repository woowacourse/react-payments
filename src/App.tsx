import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import MyCardPage from './pages/MyCardPage/MyCardPage';
import CardRegisterPage from './pages/CardRegisterPage/CardRegisterPage';
import { useState } from 'react';
import Header from './components/Header/Header';

export interface Numbers {
  first: string;
  second: string;
  third: string;
  fourth: string;
  [key: string]: string;
}

export interface ExpirationDate {
  month: string;
  year: string;
  [key: string]: string;
}

export interface Password {
  first: string;
  second: string;
  [key: string]: string;
}

export interface CardInfo {
  numbers: Numbers;
  expirationDate: ExpirationDate;
  securityCode: string;
  password: Password;
  ownerName?: string;
}

const App = () => {
  const [cardList, setCardList] = useState<CardInfo[]>([]);

  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path="/" element={<MyCardPage cardList={cardList} />} />
          <Route path="/register" element={<CardRegisterPage setCardList={setCardList} />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
