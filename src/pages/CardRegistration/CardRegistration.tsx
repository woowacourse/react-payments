import { useState } from 'react';
import styled from 'styled-components';
import Card, { CARD_TYPE } from '../../components/Card';
import Header from '../../components/Header';
import PaymentsInputContainer from '../../containers/PaymentsInputContainer';
import useCardNumber from './hooks/useCardNumber';
import useExpirationDate from './hooks/useExpirationDate';

const MainCardRegistration = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: 12px;
  }
`;

function CardRegistration() {
  const { cardNumber, setCardNumber } = useCardNumber();
  const { expirationDate, setExpirationDate } = useExpirationDate();
  const [owner, setOwner] = useState('NAME');

  return (
    <>
      <Header title="카드 추가" hasBackHistory />
      <MainCardRegistration>
        <Card cardType={CARD_TYPE.DEFAULT} cardInformation={{ cardNumber, expirationDate, owner }} />
        <PaymentsInputContainer
          setCardNumber={setCardNumber}
          setExpirationDate={setExpirationDate}
          setOwner={setOwner}
        />
      </MainCardRegistration>
    </>
  );
}

export default CardRegistration;
