import React, { useState } from 'react';
import { AddCard, AddCardComplete } from './pages';
import { Route, BrowserRouter } from 'react-router-dom';
import CardList from './pages/CardList';

function App() {
  const [cards, setCards] = useState([]);

  const addCards = (card) => {
    console.log(cards);
    setCards([...cards, card]);
  };

  return (
    <>
      <BrowserRouter>
        <Route exact path="/">
          <CardList cards={cards} />
        </Route>
        <Route exact path="/addCard">
          <AddCard />
        </Route>
        <Route exact path="/addCardComplete">
          <AddCardComplete addCards={addCards} />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
