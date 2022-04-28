import React from 'react';
import Card from './components/Card';
import InputForm from './components/InputForm';
import { useCardInput } from './hooks/useCardInput';

function App() {
  const [cardInput, cardInputDispatch] = useCardInput();

  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title"> 카드 추가 </h2>
        <Card cardInformation={cardInput}></Card>
        <InputForm cardInput={cardInput} cardInputDispatch={cardInputDispatch}></InputForm>
      </div>
    </div>
  );
}

export default App;
