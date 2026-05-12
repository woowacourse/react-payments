import { BrowserRouter, Routes, Route } from "react-router";
import AddNewCardPage from "./pages/AddNewCardPage";
import CardRegistrationCompletePage from "./pages/CardRegistrationCompletePage";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<AddNewCardPage />} />
        <Route path="/complete" element={<CardRegistrationCompletePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
