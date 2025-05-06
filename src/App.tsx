import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import CompletePage from './pages/CompletePage/CompletePage';
import MobileLayout from './components/MobileLayout/MobileLayout';

export default function App() {
  return (
    <Routes>
      <Route element={<MobileLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/complete" element={<CompletePage />} />
      </Route>
    </Routes>
  );
}
