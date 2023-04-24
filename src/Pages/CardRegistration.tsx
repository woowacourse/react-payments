import { useState } from 'react';
import styled from 'styled-components';
import CardRegistrationForm from '../components/CardRegistrationForm';
import Card from '../components/Common/Card';
import Header from '../components/Common/Header';
import type { CardInformation } from '../components/Common/Card/types';

function CardRegistration() {
  const [card, setCard] = useState<CardInformation>({
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    owner: '',
  });

  return (
    <>
      <Header title="카드 추가" hasBackHistory />
      <StyledMainCardRegistration>
        <Card cardInformation={card} isAddForm />
        <CardRegistrationForm setCard={setCard} />
      </StyledMainCardRegistration>
    </>
  );
}

const StyledMainCardRegistration = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: 12px;
  }
`;

export default CardRegistration;
