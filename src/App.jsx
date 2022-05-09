import CardInfoContextProvider from 'contexts/CardInfoContextProvider';

import CardListPage from 'pages/CardListPage';
import CardAddPage from 'pages/CardAddPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardNamePage from 'pages/CardNamePage';

function App() {
  return (
    <BrowserRouter>
      <CardInfoContextProvider>
        <Routes>
          <Route path="/react-payments" element={<CardListPage />}></Route>
          <Route path="/card-add" element={<CardAddPage />}></Route>
          <Route path="/card-name" element={<CardNamePage />}></Route>
        </Routes>
      </CardInfoContextProvider>
    </BrowserRouter>
  );
}

export default App;
