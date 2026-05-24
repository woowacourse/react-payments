import './core/styles/index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CardListPage } from './pages/cardList/CardListPage';
import { RegisterCardPage } from './pages/registerCard/ui/RegisterCardPage';
import { Result } from './pages/result/Result';

function App() {
  return (
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route path="/" element={<CardListPage />} />
        <Route path="/cards" element={<CardListPage />} />
        <Route path="/register" element={<RegisterCardPage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
