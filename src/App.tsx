import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from 'style/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
