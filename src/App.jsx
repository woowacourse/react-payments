import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CardAddition from './pages/CardAddition';
import Home from './pages/Home';

import { CardProvider } from './context/CardProvider';


const App = () => {
  return (
    <div className='App'>
      <CardProvider>
        <Routes>
          <Route path='/add' element={<CardAddition />} />
          <Route path='/' element={<Home />} exact />
        </Routes>
      </CardProvider>
    </div>
  );
}

export default App;
