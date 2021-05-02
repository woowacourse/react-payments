import React, { useState } from 'react';
import { AddCardForm, AddCardComplete } from './pages';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  const [cards, setCards] = useState([]);

  const addCards = (card) => {
    setCards([...cards, card]);
  };

  return (
    <>
      <BrowserRouter>
        <Route exact path={['/', '/addCardForm']}>
          <AddCardForm />
        </Route>
        <Route exact path="/addCardComplete">
          <AddCardComplete />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
