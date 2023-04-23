import styled from 'styled-components';
import CardRegistrationForm from '../components/CardRegistrationForm';
import Card from '../components/Common/Card';
import Header from '../components/Common/Header';
import type { CardInformation } from '../components/Common/Card/types';

const MainCardRegistration = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    margin: 12px;
  }
`;

const cardInformation: CardInformation = {
  cardNumber: ['1234', '1234', '1234', '1234'],
  expirationDate: ['YY', 'MM'],
  owner: 'NAME',
};

function CardRegistration() {
  return (
    <>
      <Header title="카드 추가" hasBackHistory />
      <MainCardRegistration>
        <Card cardInformation={cardInformation} isAddForm />
        <CardRegistrationForm />
      </MainCardRegistration>
    </>
  );
}

export default CardRegistration;
