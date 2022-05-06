import GlobalStyle from "./globalStyles";
import { Routes, Route, Link } from "react-router-dom";

import PageHeader from "./components/PageHeader";
import AddCard from "./components/AddCard";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PageHeader />
      <Routes>
        <Route path="/" element={<AddCard />} />
        <Route path="/add-card" element={<AddCard />} />
      </Routes>
    </div>
  );
}

export default App;
