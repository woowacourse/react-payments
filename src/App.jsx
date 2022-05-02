import React from 'react';
import CardAddition from './CardAddition';
import CardContext from './CardContext';
import useInitialAppValue from './hooks/useInitialAppValue';
import initialState from './reducers/card.initialState';
import reducer from './reducers/card.reducer';

function App() {
  return (
    <div className="App">
      <CardContext.Provider value={useInitialAppValue(reducer, initialState)}>
        <CardAddition />
      </CardContext.Provider>
    </div>
  );
}

export default App;
