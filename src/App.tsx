import './App.css';
import useInput from './hooks/useInput';
import CardholderNameContainer from './components/CardholderNameContainer';
import CardExpiryDateContainer from './components/CardExpiryDateContainer';
import { inquireCardholderName, inquireExpiryMonth, inquireExpiryYear } from './inquiry';

const App = () => {
  const {
    value: cardholderName,
    handleChange: handleChangeCardholderName,
    updateErrorMessage: updateCardholderNameErrorMessage,
    errorMessage: cardholderNameErrorMessage,
  } = useInput('', inquireCardholderName);

  const {
    value: expiryMonth,
    handleChange: handleChangeExpiryMonth,
    updateErrorMessage: updateExpiryMonthErrorMessage,
    errorMessage: expiryMonthErrorMessage,
  } = useInput('', inquireExpiryMonth);

  const {
    value: expiryYear,
    handleChange: handleChangeExpiryYear,
    updateErrorMessage: updateExpiryYearErrorMessage,
    errorMessage: expiryYearErrorMessage,
  } = useInput('', inquireExpiryYear);

  return (
    <>
      <CardholderNameContainer
        cardholderName={cardholderName}
        handleChange={handleChangeCardholderName}
        updateErrorMessage={updateCardholderNameErrorMessage}
        errorMessage={cardholderNameErrorMessage}
      />
      <CardExpiryDateContainer
        expiryDate={{ month: expiryMonth, year: expiryYear }}
        changeHandler={{ month: handleChangeExpiryMonth, year: handleChangeExpiryYear }}
        errorMessageUpdater={{ month: updateExpiryMonthErrorMessage, year: updateExpiryYearErrorMessage }}
        errorMessage={{ month: expiryMonthErrorMessage, year: expiryYearErrorMessage }}
      />
    </>
  );
};

export default App;
