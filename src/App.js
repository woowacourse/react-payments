import './App.css';
import CardAddPage from './Pages/CardAddPage';
import CardCompletePage from './Pages/CardCompletePage';
import CardListPage from './Pages/CardListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CardContextProvider } from './context/CardContext';

function App() {
  return (
    <div className="App">
      <CardContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/react-payments/cardAdd" element={<CardAddPage />} />
            <Route
              path="/react-payments/cardComplete"
              element={<CardCompletePage />}
            />
            <Route path="/react-payments/cardList" element={<CardListPage />} />
            <Route path="*" />
          </Routes>
        </BrowserRouter>
      </CardContextProvider>
    </div>
  );
}

export default App;
