import styled from 'styled-components';

import CardholderNameInputContainer from './components/CardholderNameInputContainer';
import CardExpiryDateInputContainer from './components/CardExpiryDateInputContainer';
import CardNumbersInputContainer from './components/CardNumbersInputContainer';
import CardPreview from './components/CardPreview';

import useCardInfo from './hooks/useCardInfo';
import CvcInputContainer from './components/CvcInputContainer';
import PasswordInputContainer from './components/PasswordInputContainer';
import { useEffect, useMemo, useState } from 'react';

const App = () => {
  const { cardNumbers, expiryDate, cardholderName, cvc, password } = useCardInfo();
  const [stage, setStage] = useState(0);

  const predicates = useMemo(
    () => [
      Object.values(cardNumbers.value).every(v => v) && Object.values(cardNumbers.errorStatus.isError).every(v => !v),

      expiryDate.month.value &&
        !expiryDate.month.errorStatus.isError &&
        expiryDate.year.value &&
        !expiryDate.year.errorStatus.isError,

      cardholderName.value && !cardholderName.errorStatus.isError,

      cvc.value && !cvc.errorStatus.isError,
    ],
    [cardNumbers, expiryDate, cardholderName, cvc],
  );

  useEffect(() => {
    if (stage === 0 && predicates[0]) {
      setStage(1);
    } else if (stage === 1 && predicates[1]) {
      setStage(2);
    } else if (stage === 2 && predicates[2]) {
      setStage(3);
    } else if (stage === 3 && predicates[3]) {
      setStage(4);
    }
  }, [predicates, stage]);

  return (
    <AppLayout>
      <CardPreview
        cardNumbers={cardNumbers.value}
        expiryDate={{ month: expiryDate.month.value, year: expiryDate.year.value }}
        cardholderName={cardholderName.value}
      />
      <CardInfoInputWrapper>
        {stage >= 4 && <PasswordInputContainer {...password} />}
        {stage >= 3 && <CvcInputContainer {...cvc} />}
        {stage >= 0 && <CardholderNameInputContainer {...cardholderName} />}
        {stage >= 0 && <CardExpiryDateInputContainer {...expiryDate} />}
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
