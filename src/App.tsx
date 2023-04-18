import { Routes, Route } from 'react-router-dom';
import CardListPage from './components/CardListPage';
import CardAddPage from './components/CardAddPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<CardListPage />} />
        <Route path="/add-card" element={<CardAddPage />} />
      </Routes>
    </div>
  );
}

export default App;
