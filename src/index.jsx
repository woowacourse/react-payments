import ReactDOM from 'react-dom/client';
import App from 'App';
import * as S from 'globalStyles/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <S.GlobalStyle />
    <App />
  </>,
);
