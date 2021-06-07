import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CardContextProvider from './contexts/CardContextProvider';
import PageContextProvider from './contexts/PageContextProvider';
import * as Styled from './style.js';

ReactDOM.render(
  <>
    <Styled.GlobalStyle />
    <PageContextProvider>
      <CardContextProvider>
        <Styled.Container>
          <App />
        </Styled.Container>
      </CardContextProvider>
    </PageContextProvider>
  </>,
  document.getElementById('root')
);
