import { Route, Routes } from "react-router";
import "./App.css";
import CardAddPage from "pages/CardAddPage/CardAddPage.pages";
import CardRegisterPage from "pages/CardRegisterPage/CardRegisterPage.pages";
import HomePage from "pages/HomePage/HomePage.pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<CardAddPage />} />
      <Route path="/add/:id" element={<CardAddPage />} />
      <Route path="/register" element={<CardRegisterPage />} />
    </Routes>
  );
}

export default App;
