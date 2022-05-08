import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CardAddition from './pages/CardAddition';
import { CardProvider } from './context/CardProvider';


const App = () => {
  return (
    <div className='App'>
      <CardProvider>
        <Routes>
          <Route path='/add' element={<CardAddition />} />
        </Routes>
      </CardProvider>
    </div>
  );
}

export default App;
