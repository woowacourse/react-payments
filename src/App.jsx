import './css/App.css';
import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCard from './addCard/components/AddCard';
import AddCardSuccess from './addSuccess/components/AddCardSuccess';
import CardList from './cardList/components/CardList';
import { Card as CardConstructor } from './util';
import AddCardContext from './AddCardContext';

function App() {
  const [cardList, setCardList] = useState([]);
  const [card, setCard] = useState(CardConstructor());

  const updateCard = (value, name) => {
    setCard((prevCard) => {
      return { ...prevCard, [name]: value };
    });
  };

  const initCard = () => {
    Object.keys(CardConstructor()).forEach((cardKey) => {
      updateCard('', cardKey);
    });
  };

  const addCard = (newCard) => {
    setCardList((prevList) => [...prevList, newCard]);
    initCard();
  };

  const contextValue = useMemo(() => ({ card, updateCard }), [card]);

  return (
    <div className="App">
      <AddCardContext.Provider value={contextValue}>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<CardList cardList={cardList} />} />
            <Route path="/addCard" element={<AddCard />} />
            <Route path="/success" element={<AddCardSuccess card={card} addCard={addCard} />} />
          </Routes>
        </Router>
      </AddCardContext.Provider>
    </div>
  );
}

export default App;
