import AddCardPage from './pages/AddCard/AddCardPage';
import AddCardCompletePage from './pages/AddCardComplete/AddCardCompletePage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="/complete" element={<AddCardCompletePage />} />
      <Route path="/" element={<AddCardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
