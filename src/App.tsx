import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardPage from './pages/CardPage/CardPage';
import CardCompletePage from './pages/CardCompletePage/CardCompletePage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<CardPage />} />
        <Route path="/card/complete" element={<CardCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
