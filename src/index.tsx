import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import Providers from 'providers/Providers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Providers />
  </StrictMode>
);
