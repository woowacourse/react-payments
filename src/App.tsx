import './App.css';
import useInput from './hooks/useInput';
import useInputs from './hooks/useInputs';
import CardholderNameContainer from './components/CardholderNameContainer';
import CardExpiryDateContainer from './components/CardExpiryDateContainer';
import { inquireCardNumber, inquireCardholderName, inquireExpiryMonth, inquireExpiryYear } from './inquiry';
import CardNumberContainer from './components/CardNumbersContainer';
import CardPreview from './components/CardPreview';
import styled from 'styled-components';

const App = () => {
  const {
    value: cardNumbers,
    generateChangeHandler: generateCardNumbersChangeHandler,
    generateErrorMessageUpdater: generateCardNumberErrorMessageUpdater,
    errorMessage: cardNumbersErrorMessage,
    errorStatus: cardNumbersErrorStatus,
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
    setValue: setCardholderName,
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
    <AppLayout>
      <CardPreview
        cardNumbers={cardNumbers}
        expiryDate={{ month: expiryMonth, year: expiryYear }}
        cardholderName={cardholderName}
      />
      <CardInfoWrapper>
        <CardNumberContainer
          cardNumbers={cardNumbers}
          generateChangeHandler={generateCardNumbersChangeHandler}
          generateErrorMessageUpdater={generateCardNumberErrorMessageUpdater}
          errorMessage={cardNumbersErrorMessage}
          errorStatus={cardNumbersErrorStatus}
        />
        <CardExpiryDateContainer
          expiryDate={{ month: expiryMonth, year: expiryYear }}
          changeHandler={{ month: handleChangeExpiryMonth, year: handleChangeExpiryYear }}
          errorMessageUpdater={{ month: updateExpiryMonthErrorMessage, year: updateExpiryYearErrorMessage }}
          errorMessage={{ month: expiryMonthErrorMessage, year: expiryYearErrorMessage }}
        />
        <CardholderNameContainer
          cardholderName={cardholderName}
          setCardholderName={setCardholderName}
          updateErrorMessage={updateCardholderNameErrorMessage}
          errorMessage={cardholderNameErrorMessage}
        />
      </CardInfoWrapper>
    </AppLayout>
  );
};

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const CardInfoWrapper = styled.section`
  margin-top: 50px;
`;

export default App;
