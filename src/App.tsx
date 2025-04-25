import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import CompletePage from './pages/CompletePage/CompletePage';
import Layout from './components/Layout/Layout';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="complete" element={<CompletePage />} />
      </Route>
    </Routes>
  );
}
