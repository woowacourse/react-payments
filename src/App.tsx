import './App.css';
import useInput from './hooks/useInput';
import useInputs from './hooks/useInputs';
import CardholderNameContainer from './components/CardholderNameContainer';
import CardExpiryDateContainer from './components/CardExpiryDateContainer';
import { inquireCardNumber, inquireCardholderName, inquireExpiryMonth, inquireExpiryYear } from './inquiry';
import CardNumberContainer from './components/CardNumbersContainer';

const App = () => {
  const {
    value: cardNumbers,
    generateChangeHandler: generateCardNumbersChangeHandler,
    generateErrorMessageUpdater: generateCardNumberErrorMessageUpdater,
    errorMessage: cardNumbersErrorMessage,
  } = useInputs(
    {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    inquireCardNumber,
  );

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
      <CardNumberContainer
        cardNumbers={cardNumbers}
        generateChangeHandler={generateCardNumbersChangeHandler}
        generateErrorMessageUpdater={generateCardNumberErrorMessageUpdater}
        errorMessage={cardNumbersErrorMessage}
      />
      <CardExpiryDateContainer
        expiryDate={{ month: expiryMonth, year: expiryYear }}
        changeHandler={{ month: handleChangeExpiryMonth, year: handleChangeExpiryYear }}
        errorMessageUpdater={{ month: updateExpiryMonthErrorMessage, year: updateExpiryYearErrorMessage }}
        errorMessage={{ month: expiryMonthErrorMessage, year: expiryYearErrorMessage }}
      />
      <CardholderNameContainer
        cardholderName={cardholderName}
        handleChange={handleChangeCardholderName}
        updateErrorMessage={updateCardholderNameErrorMessage}
        errorMessage={cardholderNameErrorMessage}
      />
    </>
  );
};

export default App;
