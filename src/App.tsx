import { Routes, Route } from 'react-router-dom';
import CardListPage from './pages/CardListPage';
import CardAddPage from './pages/CardAddPage';
import CardRegisteredPage from './pages/CardRegisteredPage';
import { PaymentsProvider } from './contexts/PaymentsContext';

function App() {
  return (
    <PaymentsProvider>
      <div className="app">
        <Routes>
          <Route path="/" element={<CardListPage />} />
          <Route path="/add-card" element={<CardAddPage />} />
          <Route path="/registered" element={<CardRegisteredPage />} />
        </Routes>
      </div>
    </PaymentsProvider>
  );
}

export default App;
