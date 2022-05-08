import './css/App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCard from './addCard/components/AddCard';
import AddCardSuccess from './addSuccess/components/AddCardSuccess';
import CardList from './cardList/components/CardList';

function App() {
  const [cardList, setCardList] = useState([]);

  const addCard = (card) => {
    setCardList((prevList) => [...prevList, card]);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CardList cardList={cardList} />} />
          <Route path="/addCard" element={<AddCard />} />
          <Route path="/success" element={<AddCardSuccess addCard={addCard} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
