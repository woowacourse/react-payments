import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import * as S from 'styles.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <S.GlobalStyle />
    <App />
  </React.StrictMode>,
);
