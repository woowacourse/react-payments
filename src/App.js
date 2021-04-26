import GlobalStyles from './global.styles';
import React, { useState } from 'react';
import Card from './common/Card';
import Nav from './components/Nav';

import { AppWrapper } from './App.styles.js';
import NewCardForm from './components/NewCardForm';

function App() {
  const [newCardInfo, setNewCardInfo] = useState({
    cardName: 'DEFAULT',
    numbers: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    user: '',
    expireDate: {
      month: '',
      year: '',
    },
    cvc: '',
    password: {
      first: '',
      second: '',
    },
  });

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        {console.log(newCardInfo)}
        <Nav />
        <div className='card-wrapper'>
          <Card cardInfo={newCardInfo} />
        </div>
        <NewCardForm cardInfo={newCardInfo} setNewCardInfo={setNewCardInfo} />
      </AppWrapper>
    </>
  );
}

export default App;
