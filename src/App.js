import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CardAdd, CardAddComplete, CardList } from 'pages';

import { PATH } from 'constants';

function App() {
  const [card, setCard] = useState({
    cardCompany: '티거 카드 🐯',
    cardNumber: ['', '', '', ''],
    userName: '',
    expireMonth: '',
    expireYear: '',
  });

  return (
    <Router>
      <Routes>
        <Route path={PATH.CARD_LIST} element={<CardList />} />
        <Route path={PATH.CARD_ADD} element={<CardAdd setCard={setCard} />} />
        <Route path={PATH.CARD_ADD_COMPLETE} element={<CardAddComplete card={card} />} />
      </Routes>
    </Router>
  );
}

export default App;
