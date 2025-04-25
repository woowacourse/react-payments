import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CardPage from './pages/CardPage/CardPage';
import CardCompletePage from './pages/CardCompletePage/CardCompletePage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigate to="/card" replace />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/card/complete" element={<CardCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
