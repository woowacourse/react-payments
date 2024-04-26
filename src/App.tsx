import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { COLOR } from './styles/color';
import CompletePaymentRegister from './components/CompletePaymentsRegister';
import PATH from './constants/path';
import { Path } from './type';
import PayMents from './components/Payments';
import WrongAccess from './components/WrongAccess';
import styled from '@emotion/styled';
import useCardExpiredDate from './hooks/useCardExpiredDate';
import useCardHolder from './hooks/useCardHolder';
import useCardIssuer from './hooks/useCardIssuer';
import useCardNumbers from './hooks/useCardNumbers';
import { useRef } from 'react';

export default function App() {
  const lastPath = useRef<Path>();

  const cardNumbers = useCardNumbers();
  const cardExpiredDate = useCardExpiredDate();
  const cardHolder = useCardHolder();
  const cardIssuer = useCardIssuer();

  const resetCardInfo = () => {
    cardNumbers.initValue();
    cardExpiredDate.initValue();
    cardHolder.initValue();
    cardIssuer.initValue();
  };
  const paymentsElement = (
    <PayMents
      useCardNumbers={cardNumbers}
      useCardExpiredDate={cardExpiredDate}
      useCardHolder={cardHolder}
      useCardIssuer={cardIssuer}
      setPath={() => {
        lastPath.current = PATH.payments;
      }}
    />
  );

  const completePaymentRoute = (
    <Route
      path={PATH.completePaymentsRegister}
      element={
        <CompletePaymentRegister
          start={cardNumbers.cardNumbers[0]}
          issuer={cardIssuer.issuer}
          resetCardInfo={resetCardInfo}
        />
      }
    ></Route>
  );

  const wrongAccessElement = (
    <WrongAccess setLastPath={() => (lastPath.current = PATH.wrongAccess)} />
  );

  return (
    <AppWrapper>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={paymentsElement}></Route>
          <Route path={PATH.payments} element={paymentsElement}></Route>
          {lastPath.current === PATH.payments && completePaymentRoute}
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
    boxSizing: 'border-box',
    position: 'relative',

    backgroundColor: COLOR.white,
  },
});
