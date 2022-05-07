import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardListProvider from "context/CardListProvider";
import Home from "pages/Home";
import New from "pages/New";
import Finish from "pages/Finish";
import Edit from "pages/Edit";
import NotFound from "pages/NotFound";

function App() {
  return (
    <CardListProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/finish/:id" element={<Finish />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CardListProvider>
  );
}

export default App;
