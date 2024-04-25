import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { COLOR } from './styles/color';
import CompletePaymentRegister from './components/CompletePaymentsRegister';
import PATH from './constants/path';
import { Path } from './type';
import PayMents from './components/Payments';
import WrongAccess from './components/WrongAccess';
import { matchCardIssuer } from './domain/matchCardIssuer';
import styled from '@emotion/styled';
import useCardExpiredDate from './hooks/useCardExpiredDate';
import useCardHolder from './hooks/useCardHolder';
import useCardNumbers from './hooks/useCardNumbers';
import { useState } from 'react';

export default function App() {
  const [lastPath, setLastPath] = useState<Path | null>(null);

  const cardNumbers = useCardNumbers();
  const cardExpiredDate = useCardExpiredDate();
  const cardHolder = useCardHolder();
  const cardIssuer = matchCardIssuer(cardNumbers.cardNumbers.join(''));

  const resetCardInfo = () => {
    cardNumbers.initValue();
    cardExpiredDate.initValue();
    cardHolder.initValue();
  };
  const paymentsElement = (
    <PayMents
      useCardNumbers={cardNumbers}
      useCardExpiredDate={cardExpiredDate}
      useCardHolder={cardHolder}
      cardIssuer={cardIssuer}
      setPath={() => {
        setLastPath(PATH.payments);
      }}
    />
  );

  const completePaymentRoute = (
    <Route
      path={PATH.completePaymentsRegister}
      element={
        <CompletePaymentRegister
          start={cardNumbers.cardNumbers[0]}
          issuer={cardIssuer}
          resetCardInfo={resetCardInfo}
        />
      }
    ></Route>
  );

  const wrongAccessElement = (
    <WrongAccess setLastPath={() => setLastPath(PATH.wrongAccess)} />
  );

  return (
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={paymentsElement}></Route>
          <Route path={PATH.payments} element={paymentsElement}></Route>
          {lastPath === PATH.payments && completePaymentRoute}
          <Route path='*' element={wrongAccessElement}></Route>
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}
const AppWrapper = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '50px',
  '&>*': {
    width: '376px',
    height: '700px',

    backgroundColor: COLOR.white,
  },
});
