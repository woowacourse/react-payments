import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCard from "./pages/AddCard";
import SamplePage from "./pages/SamplePage";
import ConfirmAddCard from "./pages/ConfirmAddCard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AddCard />} />
          <Route path="/addCard" element={<AddCard />} />
          <Route path="/samplePage" element={<SamplePage />} />
          <Route path="/confirmAddCard" element={<ConfirmAddCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
