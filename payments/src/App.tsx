import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardProvider } from "./context/CardProvider";
import { CardListProvider } from "./context/CardListProvider";
import Home from "./pages/Home";
import CardAddPage from "./pages/CardAddPage";

const App = () => {
  return (
    <CardListProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/addCard"
            element={
              <CardProvider>
                <CardAddPage />
              </CardProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </CardListProvider>
  );
};

export default App;
