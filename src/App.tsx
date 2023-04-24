import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyCardPage from './pages/MyCardPage/MyCardPage';
import CardRegisterPage from './pages/CardRegisterPage/CardRegisterPage';
import { useState } from 'react';
import Header from './components/Header/Header';
import { CardInfo } from './types/state';

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
