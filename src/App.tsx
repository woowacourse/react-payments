import "./App.css";
import "./style/reset.css";
import "./style/palette.css";

import CardInputPage from "./component/CardInputPage/CardInputPage";
import CardListPage from "./component/CardListPage/CardListPage";

import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardListPage />} />
          <Route path="/CardListPage" element={<CardListPage />} />
          <Route path="/CardInputPage" element={<CardInputPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
