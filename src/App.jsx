import React from 'react';
import CardAddition from './CardAddition';
import CardProvider from './context/CardContext';

function App() {
  return (
    <div className="App">
      <CardProvider>
        <CardAddition />
      </CardProvider>
    </div>
  );
}

export default App;
