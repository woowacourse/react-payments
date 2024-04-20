import './App.css';
import useInput from './hooks/useInput';
import useInputs from './hooks/useInputs';
import CardholderNameContainer from './components/CardholderNameContainer';
import CardExpiryDateContainer from './components/CardExpiryDateContainer';
import { inquireCardNumber, inquireCardholderName, inquireExpiryMonth, inquireExpiryYear } from './inquiry';
import CardNumberContainer from './components/CardNumbersContainer';
import CardPreview from './components/CardPreview';
import styled from 'styled-components';

const INITIAL_CARD_NUMBER = { first: '', second: '', third: '', fourth: '' };

const App = () => {
  const { value: cardNumbers, ...cardNumbersInput } = useInputs(INITIAL_CARD_NUMBER, inquireCardNumber);
  const { value: cardholderName, ...cardholderNameInput } = useInput('', inquireCardholderName);

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
        <CardNumberContainer cardNumbers={cardNumbers} {...cardNumbersInput} />
        <CardExpiryDateContainer
          expiryDate={{ month: expiryMonth, year: expiryYear }}
          changeHandler={{ month: handleChangeExpiryMonth, year: handleChangeExpiryYear }}
          errorMessageUpdater={{ month: updateExpiryMonthErrorMessage, year: updateExpiryYearErrorMessage }}
          errorMessage={{ month: expiryMonthErrorMessage, year: expiryYearErrorMessage }}
        />
        <CardholderNameContainer cardholderName={cardholderName} {...cardholderNameInput} />
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
