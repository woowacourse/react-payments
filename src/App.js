import React, { useState } from 'react';
import { AddCard, AddCardComplete, CardList } from './pages';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  const [cards, setCards] = useState([]);

  const addCards = (card) => {
    setCards([...cards, card]);
  };

  return (
    <>
      <BrowserRouter>
        <Route exact path="/">
          <CardList cards={cards} setCards={setCards} />
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
