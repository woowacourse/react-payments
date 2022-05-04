import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CardListPage from './pages/CardListPage';
import AddPage from './pages/AddPage';
import AddCompletePage from './pages/AddCompletePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardListPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/complete" element={<AddCompletePage />} />
      </Routes>
    </Router>
  );
}
