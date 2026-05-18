import { Navigate, Route, Routes } from "react-router-dom";
import { CardRegisterPage } from "./pages/CardRegisterPage";
import { CardRegisterCompletePage } from "./pages/CardRegisterCompletePage";
import CardDashboardPage from "./pages/CardDashboardPage";
import { useCardForm } from "./hooks/useCardForm";

function App() {
  const { cardFormState, brand, handleSetFormState } = useCardForm();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cards" />} />
      <Route path="/cards" element={<CardDashboardPage />} />
      <Route
        path="/cards/register"
        element={
          <CardRegisterPage
            cardFormState={cardFormState}
            brand={brand}
            handleSetFormState={handleSetFormState}
          />
        }
      />
      <Route
        path="/react-payments/success"
        element={<CardRegisterCompletePage cardFormState={cardFormState} />}
      />
    </Routes>
  );
}

export default App;
