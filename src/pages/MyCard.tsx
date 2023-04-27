import { useContext } from 'react';
import Header from '../components/common/Header';
import Page from '../components/common/Page';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card';
import { getLocalStorage } from '../utils/localStorage';
import { CardType } from '../types';
import uuid from 'react-uuid';
import { ModalContext } from '../store/modalContext';

const MyCard = () => {
  const cards = getLocalStorage('card');

  const modalCtx = useContext(ModalContext);
  const navigate = useNavigate();

  const registerCard = () => {
    modalCtx.openModal();

    navigate('/AddCard');
  };

  return (
    <Page>
      <>
        <Header title="보유카드" goToMainPage={false} />
        {cards.map((card: CardType) => (
          <CardWrapper key={uuid()}>
            <Card
              color={card.color}
              ownerName={card.ownerName}
              expiredDate={card.expiredDate}
              cardNumber={card.cardNumber}
              bankName={card.bankName}
            />
            {card.cardName && <CardNameWrapper>{card.cardName}</CardNameWrapper>}
          </CardWrapper>
        ))}
        <EmptyCardWrapper onClick={registerCard}>+</EmptyCardWrapper>
      </>
    </Page>
  );
};

const CardWrapper = styled.div`
  margin-bottom: 30px;
`;

const EmptyCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #575757;
  font-size: 30px;

  width: 208px;
  height: 123px;

  background: #e5e5e5;
  border-radius: 5px;
  text-decoration: none;

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  :active {
    transform: scale(0.98);
  }
`;

const CardNameWrapper = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 15px;
`;

export default MyCard;
