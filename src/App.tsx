import { Route, Routes } from "react-router-dom";
import AddCardPage from "./pages/addCard/AddCardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AddCardPage />} />
    </Routes>
  );
}

export default App;
