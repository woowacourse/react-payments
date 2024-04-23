import styled from 'styled-components';

import CardholderNameInputContainer from './components/CardholderNameInputContainer';
import CardExpiryDateInputContainer from './components/CardExpiryDateInputContainer';
import CardNumbersInputContainer from './components/CardNumbersInputContainer';
import CardPreview from './components/CardPreview';

import useCardInfo from './hooks/useCardInfo';
import CvcInputContainer from './components/CvcInputContainer';
import PasswordInputContainer from './components/PasswordInputContainer';

const App = () => {
  const { cardNumbers, expiryDate, cardholderName, cvc, password } = useCardInfo();

  return (
    <AppLayout>
      <CardPreview
        cardNumbers={cardNumbers.value}
        expiryDate={{ month: expiryDate.monthControl.value, year: expiryDate.yearControl.value }}
        cardholderName={cardholderName.value}
      />
      <CardInfoInputWrapper>
        <PasswordInputContainer {...password} />
        <CvcInputContainer {...cvc} />
        <CardholderNameInputContainer {...cardholderName} />
        <CardExpiryDateInputContainer {...expiryDate} />
        <CardNumbersInputContainer {...cardNumbers} />
      </CardInfoInputWrapper>
    </AppLayout>
  );
};

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const CardInfoInputWrapper = styled.section`
  margin-top: 50px;
`;

export default App;
