import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import CardRegisterPage from './feature/CardRegister/CardRegisterPage';
import './styles/reset.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CardRegisterPage />
  </StrictMode>
);
