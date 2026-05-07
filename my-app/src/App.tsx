import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContainer } from './App.styles';
import CardAddPage from './pages/CardAddPage';

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<CardAddPage />} />
          <Route path="/complete" element={<div>등록 완료</div>} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
