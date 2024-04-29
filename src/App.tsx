import { HashRouter, Route, Routes } from 'react-router-dom';

import { COLOR } from './styles/color';
import CompletePaymentRegister from './components/completePaymentsRegister/CompletePaymentsRegister';
import PATH from './constants/path';
import { Path } from './type';
import PayMents from './components/payments/Payments';
import WrongAccess from './components/wrongAccess/WrongAccess';
import styled from '@emotion/styled';
import useCardCVC from './hooks/payments/useCardCVC';
import useCardExpiredDate from './hooks/payments/useCardExpiredDate';
import useCardHolder from './hooks/payments/useCardHolder';
import useCardIssuer from './hooks/payments/useCardIssuer';
import useCardNumbers from './hooks/payments/useCardNumbers';
import useCardPasswordHead from './hooks/payments/useCardPasswordHead';
import { useRef } from 'react';

export default function App() {
  const lastPath = useRef<Path>();

  const cardNumbers = useCardNumbers();
  const cardExpiredDate = useCardExpiredDate();
  const cardHolder = useCardHolder();
  const cardIssuer = useCardIssuer();
  const cardCVC = useCardCVC();
  const cardPasswordHead = useCardPasswordHead();

  const resetCardInfo = () => {
    cardNumbers.initValue();
    cardExpiredDate.initValue();
    cardHolder.initValue();
    cardIssuer.initValue();
    cardCVC.initValue();
    cardPasswordHead.initValue();
  };

  const paymentsElement = (
    <PayMents
      useCardNumbers={cardNumbers}
      useCardExpiredDate={cardExpiredDate}
      useCardHolder={cardHolder}
      useCardIssuer={cardIssuer}
      useCardCVC={cardCVC}
      useCardPasswordHead={cardPasswordHead}
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
    <WrongAccess
      setLastPath={() => (lastPath.current = PATH.wrongAccess)}
      resetCardInfo={resetCardInfo}
    />
  );

  return (
    <AppWrapper>
      <HashRouter>
        <Routes>
          <Route path='/' element={paymentsElement}></Route>
          <Route path={PATH.payments} element={paymentsElement}></Route>
          {lastPath.current === PATH.payments && completePaymentRoute}
          <Route path='*' element={wrongAccessElement}></Route>
        </Routes>
      </HashRouter>
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
  overflow: 'hidden',
  '&>*': {
    width: '376px',
    height: '700px',
    boxSizing: 'border-box',
    position: 'relative',

    backgroundColor: COLOR.white,
  },
});
