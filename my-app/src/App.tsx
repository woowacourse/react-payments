import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContainer } from './App.styles';
import CardAddPage from './pages/CardAddPage/CardAddPage';
import CardAddSuccessPage from './pages/CardAddSuccessPage/CardAddSuccessPage';
import CardListPage from './pages/CardListPage/CardListPage';

const App = () => {
  return (
    <BrowserRouter basename="/react-payments">
      <AppContainer>
        <Routes>
          <Route path="/" element={<CardListPage />} />
          <Route path="/card-add" element={<CardAddPage />} />
          <Route path="/card-add-success" element={<CardAddSuccessPage />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
