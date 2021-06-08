import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Styled from './style.js';
import { PaymentContextProvider } from './contexts/PaymentContextProvider';

ReactDOM.render(
  <>
    <Styled.GlobalStyle />
    <Styled.Container>
      <PaymentContextProvider>
        <App />
      </PaymentContextProvider>
    </Styled.Container>
  </>,
  document.getElementById('root')
);
