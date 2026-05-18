import { Routes, Route, Navigate } from "react-router-dom";

import CardRegister from "./pages/CardRegisterPage";
import CardComplete from "./pages/CardComplete";
import CardListPage from "./pages/CardListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cards" replace />} />;
      <Route path="/cards" element={<CardListPage />} />
      <Route path="/register" element={<CardRegister />} />
      <Route path="/complete" element={<CardComplete />} />
    </Routes>
  );
}

export default App;
