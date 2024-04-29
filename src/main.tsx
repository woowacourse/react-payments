import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/GlobalStyles.tsx';
import { GlobalLayout } from './styles/common.ts';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <GlobalLayout>
      <App />
    </GlobalLayout>
  </StrictMode>,
);
