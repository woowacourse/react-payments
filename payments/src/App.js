import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardProvider } from "./context/CardProvider";
import { CardListProvider } from "./context/CardListProvider";
import Home from "./pages/Home";
import CardAddPage from "./pages/CardAddPage";

const App = () => {
  return (
    <CardListProvider>
      <CardProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addcard" element={<CardAddPage />} />
          </Routes>
        </BrowserRouter>
      </CardProvider>
    </CardListProvider>
  );
};

export default App;
