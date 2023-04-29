import CardNamePage from 'Pages/CardNamePage';
import MainPage from 'Pages/MainPage';
import CardRegisterForm from 'Pages/RegisterPage/CardRegisterForm';
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
