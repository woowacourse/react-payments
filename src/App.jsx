import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AddPage from './pages/AddPage';
import CardListPage from './pages/CardListPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardListPage />} />
        <Route path="/add" element={<AddPage />} />
      </Routes>
    </Router>
  );
}
