import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardPreview from "./components/CardPreview/CardPreview";
import "./App.css";
import CardRegisterForm from "./pages/CardRegisterForm/CardRegisterForm";
import CardRegisterComplete from "./pages/CardRegisterComplete/CardRegisterComplete";
import { ROUTE } from "./constants/route";

function App() {
  return (
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route
          path={ROUTE.HOME}
          element={
            <div className="app">
              <CardPreview />
              <CardRegisterForm />
            </div>
          }
        />
        <Route
          path={ROUTE.CARD_REGISTER.COMPLETE}
          element={<CardRegisterComplete />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
