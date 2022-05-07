import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";

import AddCard from "./components/AddCard";
import PossessCard from "./components/PossessCard";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<PossessCard />} />
        <Route path="/possess-card" element={<PossessCard />} />
        <Route path="/add-card" element={<AddCard />} />
      </Routes>
    </div>
  );
}

export default App;
