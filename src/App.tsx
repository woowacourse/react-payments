import { Route, Routes } from "react-router-dom";
import { CardRegisterPage } from "./pages/CardRegisterPage";
import { CardRegisterCompletePage } from "./pages/CardRegisterCompletePage";
import { useCardForm } from "./hooks/useCardForm";

function App() {
  const { cardFormState } = useCardForm();

  return (
    <Routes>
      <Route path="/react-payments" element={<CardRegisterPage />} />
      <Route
        path="/react-payments/success"
        element={<CardRegisterCompletePage />}
      />
    </Routes>
  );
}

export default App;
