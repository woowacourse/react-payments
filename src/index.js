import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Styled from './style.js';

ReactDOM.render(
  <>
    <Styled.GlobalStyle />
    <Styled.Container>
      <App />
    </Styled.Container>
  </>,
  document.getElementById('root')
);
