import GlobalStyles from './global.styles';
import React from 'react';
import Input from './common/Input';
import { AppWrapper } from './App.styles.js';

function App() {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Input />
      </AppWrapper>
    </>
  );
}

export default App;
