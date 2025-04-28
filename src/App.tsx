import GlobalStyles from './styles/GlobalStyles';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CardPage from './pages/CardPage/CardPage';
import CardCompletePage from './pages/CardCompletePage/CardCompletePage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<CardPage />} />
        <Route path="/complete" element={<CardCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
