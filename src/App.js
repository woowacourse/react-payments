import './App.css';
import CardAddPage from './Pages/CardAddPage';
import CardCompletePage from './Pages/CardCompletePage';
import CardListPage from './Pages/CardListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CardContextProvider } from './context/CardContext';
import { LINK } from './constant/Link';

function App() {
  return (
    <div className="App">
      <CardContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={LINK.CARD_ADD_PAGE} element={<CardAddPage />} />
            <Route
              path={LINK.CARD_COMPLETE_PAGE}
              element={<CardCompletePage />}
            />
            <Route path={LINK.CARD_LIST_PAGE} element={<CardListPage />} />
            <Route path="*" element={<CardListPage />} />
          </Routes>
        </BrowserRouter>
      </CardContextProvider>
    </div>
  );
}

export default App;
