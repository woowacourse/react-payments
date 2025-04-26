import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardPreview from "./components/CardPreview/CardPreview";
import "./App.css";
import CardRegisterForm from "./pages/CardRegisterForm/CardRegisterForm";
import CardRegisterComplete from "./pages/CardRegisterComplete/CardRegisterComplete";

function App() {
  return (
    <BrowserRouter basename="/react-payments">
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <CardPreview />
              <CardRegisterForm />
            </div>
          }
        />
        <Route
          path="/card/register/complete"
          element={<CardRegisterComplete />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
