import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardFormPages from './pages/CardFormPages';
import CardRegistrationComplete from './pages/CardRegistrationComplete';
import styles from './css/main.module.css';
import './css/index.css';
import useCardForm from './hooks/useCardForm';

function App() {
  const {
    cardNumbersForm,
    cardCVCNumberForm,
    cardCompanyForm,
    cardExpirationDateForm,
    cardPasswordForm,
    canSubmit,
    resetForm,
  } = useCardForm();

  return (
    <>
      <BrowserRouter basename="/react-payments">
        <div className={styles.main}>
          <Routes>
            <Route
              path="/"
              element={
                <CardFormPages
                  cardNumbersForm={cardNumbersForm}
                  cardCVCNumberForm={cardCVCNumberForm}
                  cardCompanyForm={cardCompanyForm}
                  cardExpirationDateForm={cardExpirationDateForm}
                  cardPasswordForm={cardPasswordForm}
                  canSubmit={canSubmit}
                />
              }
            />
            <Route
              path="/complete"
              element={
                <CardRegistrationComplete
                  firstNumber={cardNumbersForm.cardNumbers.firstNumber}
                  resetForm={resetForm}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
