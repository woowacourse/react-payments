import './App.css';
import CardAddPage from './Pages/CardAddPage';
import CardListPage from './Pages/CardListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="react-payments/cardAdd" element={<CardAddPage />} />
          <Route path="react-payments/cardList" element={<CardListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
