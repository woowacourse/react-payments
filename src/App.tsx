import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CardRegisterSuccessPage } from './pages/CardRegisterSuccessPage/CardRegisterSuccessPage';
import CardRegisterPage from './pages/CardRegisterPage/CardRegisterPage';
import { CardFormProvider } from './context/CardFormContext';

const App = () => {
  return (
    <BrowserRouter>
      <CardFormProvider>
        <Routes>
          <Route path="/payments/" element={<CardRegisterPage />} />

          <Route
            path="/payments/complete/"
            element={<CardRegisterSuccessPage />}
          />
        </Routes>
      </CardFormProvider>
    </BrowserRouter>
  );
};

export default App;
