import React from 'react';

import CardAddition from './pages/CardAddition';
import { CardProvider } from './context/CardProvider';


const App = () => {
  return (
    <div className='App'>
      <CardProvider>
        <CardAddition />
      </CardProvider>
    </div>
  );
}

export default App;
