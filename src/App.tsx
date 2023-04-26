import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MyCardPage from './pages/MyCardPage';
import CardRegisterPage from './pages/CardRegisterPage';
import useCardState from './hooks/useCardState';

import { CardInfo } from './types/card';

const App = () => {
  const [cardList, setCardList] = useCardState<CardInfo>();

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<MyCardPage cardList={cardList} />} />
          <Route path="/register" element={<CardRegisterPage setCardList={setCardList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
