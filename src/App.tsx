import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/global-style';

import { AddCard, CardList } from './pages';
import { CardRegisterForm } from './components/CardRegisterForm';

function App() {
  return (
    <>
      <GlobalStyle />
      <div id='App'>
        <Router>
          <Routes>
            <Route path='/' element={<CardList />}></Route>
            <Route path='/add-card' element={<AddCard />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
