import { Route, Routes } from 'react-router';
import { ROUTE_PATH } from './constants/route';
import { CardRegisterCompletePage, CardRegisterPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path={ROUTE_PATH.home} element={<CardRegisterPage />} />
      <Route
        path={ROUTE_PATH.complete}
        element={<CardRegisterCompletePage />}
      />
    </Routes>
  );
}

export default App;
