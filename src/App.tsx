import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewCardAdd from "./pages/NewCardAdd";
import SamplePage from "./pages/SamplePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<NewCardAdd />} />
          <Route path="/newCardAdd" element={<NewCardAdd />} />
          <Route path="/samplePage" element={<SamplePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
