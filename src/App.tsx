import AddCardPage from './pages/AddCard/AddCardPage';
import AddCardCompletePage from './pages/AddCardComplete/AddCardCompletePage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import { Route, Routes } from 'react-router';
import { PAGE_ROUTES } from './constants';

function App() {
  return (
    <Routes>
      <Route path={PAGE_ROUTES.COMPLETE} element={<AddCardCompletePage />} />
      <Route path={PAGE_ROUTES.DEFAULT} element={<AddCardPage />} />
      <Route path={PAGE_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
