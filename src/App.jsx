import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "pages/New";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        {/* <Route path="/edit/:id" element={<Edit />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
