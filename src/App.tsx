import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import CompletePage from './pages/CompletePage/CompletePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="complete" element={<CompletePage />} />
    </Routes>
  );
}
