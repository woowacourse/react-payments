import { Routes, Route } from "react-router-dom";

import CardRegister from "./pages/CardRegisterPage";
import CardComplete from "./pages/CardComplete";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardRegister />} />
      <Route path="/complete" element={<CardComplete />} />
    </Routes>
  );
}

export default App;
