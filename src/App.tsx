import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CardPage from './pages/CardPage/CardPage';
import CardCompletePage from './pages/CardCompletePage/CardCompletePage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigate to="/react-payments/" replace />} />
        <Route path="/react-payments/" element={<CardPage />} />
        <Route path="/react-payments/complete" element={<CardCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
