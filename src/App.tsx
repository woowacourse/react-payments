import './App.css';
import CardholderNameContainer from './components/CardholderNameContainer';
import CardExpiryDateContainer from './components/CardExpiryDateContainer';
import { inquireCardNumber, inquireCardholderName, inquireExpiryMonth, inquireExpiryYear } from './inquiry';
import CardNumberContainer from './components/CardNumbersContainer';
import CardPreview from './components/CardPreview';
import styled from 'styled-components';
import { useState } from 'react';
import useValidation from './hooks/useValidation';
import useValidations from './hooks/useValidations';

const App = () => {
  const [cardNumbers, setCardNumbers] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const cardNumbersValidation = useValidations(cardNumbers, inquireCardNumber);

  const [cardholderName, setCardholderName] = useState('');
  const cardholderNameValidation = useValidation(cardholderName, inquireCardholderName);

  const [expiryMonth, setExpiryMonth] = useState('');
  const expiryMonthValidation = useValidation(expiryMonth, inquireExpiryMonth);

  const [expiryYear, setExpiryYear] = useState('');
  const expiryYearValidation = useValidation(expiryYear, inquireExpiryYear);

  return (
    <AppLayout>
      <CardPreview
        cardNumbers={cardNumbers}
        expiryDate={{ month: expiryMonth, year: expiryYear }}
        cardholderName={cardholderName}
      />
      <CardInfoWrapper>
        <CardNumberContainer cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} {...cardNumbersValidation} />
        <CardExpiryDateContainer
          expiryDate={{ month: expiryMonth, year: expiryYear }}
          expiryDateSetter={{ month: setExpiryMonth, year: setExpiryYear }}
          errorStatus={{ month: expiryMonthValidation.errorStatus, year: expiryYearValidation.errorStatus }}
          errorStatusUpdater={{
            month: expiryMonthValidation.updateErrorStatus,
            year: expiryYearValidation.updateErrorStatus,
          }}
        />
        <CardholderNameContainer
          cardholderName={cardholderName}
          setCardholderName={setCardholderName}
          {...cardholderNameValidation}
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
