import { Route, Routes } from "react-router-dom";
import CardEnroll from "./components/CardEnroll/CardEnroll";
import NotFound from "./pages/NotFound";
import ConfirmCardEnroll from "./pages/ConfirmCardEnroll";

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
