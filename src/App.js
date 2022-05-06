import './App.css';
import CardAddPage from './Pages/CardAddPage';
import CardCompletePage from './Pages/CardCompletePage';
import CardListPage from './Pages/CardListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NickNameContextProvider } from './context/NickNameContext';

function App() {
  return (
    <div className="App">
      <NickNameContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="react-payments/cardAdd" element={<CardAddPage />} />
            <Route
              path="react-payments/cardComplete"
              element={<CardCompletePage />}
            />
            <Route path="react-payments/cardList" element={<CardListPage />} />
            <Route path="*" />
          </Routes>
        </BrowserRouter>
      </NickNameContextProvider>
    </div>
  );
}

export default App;
