import { Route, Routes } from "react-router-dom";
import AddCardPage from "./pages/addCard/AddCardPage";
import SuccessPage from "./pages/success/SuccessPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AddCardPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}

export default App;
