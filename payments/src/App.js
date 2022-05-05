import "./App.css";
import CardAdd from "./pages/CardAdd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetNickname from "./pages/SetNickname";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/addcard" element={<CardAdd />} />
        <Route path="/nickname" element={<SetNickname />} />z
      </Routes>
    </BrowserRouter>
  );
};

export default App;
