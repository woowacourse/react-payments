import { Routes, Route } from 'react-router-dom';
import { PATH } from './constants';
import CardListPage from './pages/CardListPage';
import CardAddPage from './pages/CardAddPage';
import CardRegisteredPage from './pages/CardRegisteredPage';
import { PaymentsProvider } from './contexts/PaymentsContext';

function App() {
  return (
    <PaymentsProvider>
      <div className="app">
        <Routes>
          <Route path={PATH.ROOT} element={<CardListPage />} />
          <Route path={PATH.ADD} element={<CardAddPage />} />
          <Route path={`${PATH.REGISTER}/:id`} element={<CardRegisteredPage />} />
        </Routes>
      </div>
    </PaymentsProvider>
  );
}

export default App;
