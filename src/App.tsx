import { Route, Routes } from "react-router-dom";
import CardEnroll from "./pages/CardEnroll";
import ConfirmCardEnroll from "./pages/ConfirmCardEnroll";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<CardEnroll />} />
        <Route path="/confirm" element={<ConfirmCardEnroll />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
