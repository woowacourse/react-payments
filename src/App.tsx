import MainPage from "pages/MainPage";
import CardRegisterForm from "pages/RegisterPage/CardRegisterForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/reset.css";

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
