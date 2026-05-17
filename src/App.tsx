import { Routes, Route } from "react-router-dom";

import CardRegister from "./pages/CardRegisterPage";
import CardComplete from "./pages/CardComplete";
import CardListPage from "./pages/CardListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardRegister />} />
      <Route path="/complete" element={<CardComplete />} />
      <Route path="/cards" element={<CardListPage />} />
    </Routes>
  );
}

export default App;
