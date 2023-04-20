import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../common/Header';
import { LeftArrowIcon } from '../../assets/icons';
import CardItem from '../common/CardItem';
import CardForm from '../cardForm/CardForm';
import { useState } from 'react';
import { CardItemInfo } from '../../types/Card';

const CardRegistrationPage = () => {
  const [cardItem, setCardItem] = useState<CardItemInfo>({
    id: 0,
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    name: '',
  });

  const handleChangeForm = (
    cardNumber: string[],
    expirationDate: string[],
    name: string
  ) => {
    const updatedCard = {
      id: Date.now(),
      cardNumber: cardNumber,
      expirationDate: expirationDate,
      name: name,
    };
    setCardItem(updatedCard);
  };

  return (
    <>
      <Header
        title='카드추가'
        leftChild={
          <Link to={'/'}>
            <LeftArrowIcon />
          </Link>
        }
      />
      <CardItemContainer>
        <CardItem card={cardItem} />
      </CardItemContainer>
      <CardForm onChangeForm={handleChangeForm} />
    </>
  );
};

const CardItemContainer = styled.section`
  display: flex;
  justify-content: center;
`;

export default CardRegistrationPage;
