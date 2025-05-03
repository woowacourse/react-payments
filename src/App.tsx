import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CardRegisterSuccessPage } from './pages/CardRegisterSuccessPage/CardRegisterSuccessPage';
import CardRegisterPage from './pages/CardRegisterPage/CardRegisterPage';
import { CardFormProvider } from './context/CardFormContext';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/payments/"
          element={
            <CardFormProvider>
              <CardRegisterPage />
            </CardFormProvider>
          }
        />

        <Route
          path="/payments/complete/"
          element={<CardRegisterSuccessPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
