import { BrowserRouter, Routes, Route } from "react-router";
import AddNewCardPage from "./pages/AddNewCardPage";
import CardRegistrationCompletePage from "./pages/CardRegistrationCompletePage";
import CardsPage from "./pages/CardsPage";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AddNewCardPage />} />
    <Route path="/complete" element={<CardRegistrationCompletePage />} />
    <Route path="/cards" element={<CardsPage />} />
  </Routes>
);

const App = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
