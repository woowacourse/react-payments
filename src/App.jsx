import { Route, Routes } from 'react-router-dom';

import CardListPage from 'pages/CardListPage';
import CardAddPage from 'pages/CardAddPage';
import CardAddSuccessPage from 'pages/CardAddSuccessPage';
import CardInfoContextProvider from 'CardInfoContextProvider';

function App() {
  return (
    <CardInfoContextProvider>
      <Routes>
        <Route path="/react-payments" element={<CardListPage />} />
        <Route path="/card-add" element={<CardAddPage />} />
        <Route path="/card-add-success" element={<CardAddSuccessPage />} />
      </Routes>
    </CardInfoContextProvider>
  );
}

export default App;
