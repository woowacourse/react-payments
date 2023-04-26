import MainPage from 'Pages/MainPage';
import CardRegisterForm from 'Pages/RegisterPage/CardRegisterForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<CardRegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
