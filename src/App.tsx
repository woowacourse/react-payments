import CardNamePage from 'pages/CardNamePage';
import MainPage from 'pages/MainPage';
import CardRegisterForm from 'pages/RegisterPage/CardRegisterForm';
import { AddCardContextProvider } from 'context/CardContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/register"
          element={
            <AddCardContextProvider>
              <CardRegisterForm />
            </AddCardContextProvider>
          }
        />
        <Route
          path="/register-name"
          element={
            <AddCardContextProvider>
              <CardNamePage />
            </AddCardContextProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
