import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { StrictMode } from 'react';
import GlobalStyles from './styles/GlobalStyles.tsx';
import { GlobalLayout } from './styles/common.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <GlobalLayout>
      <App />
    </GlobalLayout>
  </StrictMode>,
);
