import { Route, Routes } from "react-router";
import "./App.css";
import AddCardPage from "./pages/AddCardPage/AddCardPage";
import AddCardSuccessPage from "./pages/AddCardSuccessPage/AddCardSuccessPage";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route path="/" element={<AddCardPage />} />
        <Route path="/success" element={<AddCardSuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
