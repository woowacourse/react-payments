import "./App.css";
import CardAdd from "./pages/CardAdd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetNickname from "./pages/SetNickname";
import useCard from "./hooks/useCard";
import { CardContext } from "./context/CardProvider";

const App = () => {
  return (
    <CardContext.Provider value={useCard()}>
      <BrowserRouter>
        <Routes>
          <Route path="/addcard" element={<CardAdd />} />
          <Route path="/nickname" element={<SetNickname />} />
        </Routes>
      </BrowserRouter>
    </CardContext.Provider>
  );
};

export default App;
