import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardAddPage from "./pages/CardAddPage/CardAddPage.component";
import CardRegisterPage from "./pages/CardRegisterPage/CardRegisterPage.component";
import HomePage from "./pages/HomePage/HomePage.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<CardAddPage />} />
      <Route path="/register" element={<CardRegisterPage />} />
    </Routes>
  );
}

export default App;
