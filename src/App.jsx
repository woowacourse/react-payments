import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import New from "pages/New";
import CardListProvider from "context/CardListProvider";

function App() {
  return (
    <CardListProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          {/* <Route path="/edit/:id" element={<Edit />} />  */}
        </Routes>
      </BrowserRouter>
    </CardListProvider>
  );
}

export default App;
