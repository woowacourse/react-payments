import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'App';
import * as S from 'globalStyles/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <S.GlobalStyle />
    <Router>
      <App />
    </Router>
  </>,
);
