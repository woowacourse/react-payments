import './css/App.css';
import React from 'react';
import AddCard from './addCard/components/AddCard';
import AddCardSuccess from './addSuccess/components/AddCardSuccess';

function App() {
  return (
    <div className="App">
      {/* <AddCard /> */}
      <AddCardSuccess />
    </div>
  );
}

export default App;
