import { Route, Routes } from "react-router-dom";
import { CardRegisterPage } from "./pages/CardRegisterPage";
import { CardRegisterCompletePage } from "./pages/CardRegisterCompletePage";
import { useCardForm } from "./hooks/useCardForm";

function App() {
  const { cardFormState, brand, handleSetFormState } = useCardForm();

  return (
    <Routes>
      <Route
        path="/react-payments"
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
        element={
          <CardRegisterCompletePage
            cardFormState={cardFormState}
          />
        }
      />
    </Routes>
  );
}

export default App;
