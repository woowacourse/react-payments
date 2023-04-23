import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import MyCardPage from './pages/MyCardPage';
import CardRegisterPage from './pages/CardRegisterPage';
import { CardInfo } from './types/card';

const App = () => {
  const [cardList, setCardList] = useState<CardInfo[]>([]);

  const onChangeCardList = (values: any) => {
    setCardList((prev) => [
      {
        id: uuid,
        ...values,
      },
      ...prev,
    ]);
  };

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<MyCardPage cardList={cardList} />} />
          <Route
            path="/register"
            element={<CardRegisterPage onChangeCardList={onChangeCardList} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
