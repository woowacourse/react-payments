import GlobalStyles from './styles/GlobalStyles';
import { HashRouter, Routes, Route } from 'react-router-dom';
import CardPage from './pages/CardPage/CardPage';
import CardCompletePage from './pages/CardCompletePage/CardCompletePage';

function App() {
  return (
    <HashRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<CardPage />} />
        <Route path="/complete" element={<CardCompletePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;