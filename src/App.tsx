import { Route, Routes } from 'react-router-dom';
import CardRegistrationPage from './pages/CardRegistrationPage/CardRegistrationPage';
import CardRegistrationCompletedPage from './pages/CardRegistrationCompletedPage/CardRegistrationCompletedPage';
import { useCardNumberInput } from './hooks/useCardNumberInput';
import { useCardCompanySelect } from './hooks/useCardCompanySelect';

export default function App() {
  const { cardNumbers, handleCardNumberChange, cardNumberError } = useCardNumberInput();
  const { cardCompany, handleSelectChange } = useCardCompanySelect();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <CardRegistrationPage
            cardNumbers={cardNumbers}
            handleCardNumberChange={handleCardNumberChange}
            cardNumberError={cardNumberError}
            cardCompany={cardCompany}
            handleSelectChange={handleSelectChange}
          />
        }
      />
      <Route
        path="/card-registration-completed"
        element={<CardRegistrationCompletedPage cardNumbers={cardNumbers} cardCompany={cardCompany} />}
      />
    </Routes>
  );
}
