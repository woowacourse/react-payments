import GlobalStyles from './global.styles';
import React, { useState } from 'react';
import Card from './common/Card';
import Nav from './components/Nav';

import { AppWrapper } from './App.styles.js';

function App() {
  const [newCardInfo, setNewCardInfo] = useState({
    cardName: 'DEFAULT',
    numbers: '',
    user: 'NAME',
    expireDate: 'MM/YY',
  });

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Nav />
        <div className='card-wrapper'>
          <Card cardInfos={newCardInfo} setNewCardInfo={setNewCardInfo} />
        </div>
      </AppWrapper>
    </>
  );
}

export default App;
