import React from 'react';
import './App.css';
import Field from './components/Field';

const App = () => {
  return (
    <div className="App">
      <Field>
        <input name="first" value="wow" />
        <p>hi</p>
        <input name="second" />
      </Field>
    </div>
  );
};

export default App;
