import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CardRegisterPage from './pages/card-register/CardRegisterPage';
import CardRegisterCompletePage from './pages/card-register-complete/CardRegisterCompletePage';

const App = () => {
  return (
    <BrowserRouter basename='/react-payments'>
      <Routes>
        <Route path='/' element={<Navigate to='/card-register' replace />} />
        <Route path='/card-register' element={<CardRegisterPage />} />
        <Route
          path='/card-register-complete'
          element={<CardRegisterCompletePage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
