import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardListProvider from "context/CardListProvider";
import Home from "pages/Home";
import New from "pages/New";
import Finish from "pages/Finish";
import Edit from "pages/Edit";

function App() {
  return (
    <CardListProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/finish/:id" element={<Finish />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </CardListProvider>
  );
}

export default App;
